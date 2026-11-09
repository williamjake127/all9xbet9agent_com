import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Agent from '@/models/Agent';
import Setting from '@/models/Setting';
import { defaultSettings } from '@/lib/seedData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
};

export async function POST() {
  try {
    const conn = await dbConnect();
    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database not connected' },
        { status: 500, headers: noCacheHeaders }
      );
    }

    // Delete all agents to keep database clean
    await Agent.deleteMany({});

    // Reset default settings
    for (const [key, value] of Object.entries(defaultSettings)) {
      await Setting.findOneAndUpdate({ key }, { key, value }, { upsert: true });
    }

    return NextResponse.json(
      { success: true, message: 'Database successfully cleaned. All agents have been removed.' },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Clean Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}
