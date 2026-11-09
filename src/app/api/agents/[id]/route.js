import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Agent from '@/models/Agent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
};

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const conn = await dbConnect();

    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database not connected. Cannot update agent.' },
        { status: 503, headers: noCacheHeaders }
      );
    }

    if (body.whatsapp) {
      body.whatsapp = String(body.whatsapp).replace(/[^0-9]/g, '').trim();
    }
    if (body.category && !body.role) {
      body.role = `${body.category} Agent`;
    }

    const updated = await Agent.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Agent not found' },
        { status: 404, headers: noCacheHeaders }
      );
    }
    return NextResponse.json(
      { success: true, data: updated },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Agent PUT Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const conn = await dbConnect();

    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database not connected. Cannot delete agent.' },
        { status: 503, headers: noCacheHeaders }
      );
    }

    const deleted = await Agent.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Agent not found' },
        { status: 404, headers: noCacheHeaders }
      );
    }
    return NextResponse.json(
      { success: true, data: deleted },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Agent DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}
