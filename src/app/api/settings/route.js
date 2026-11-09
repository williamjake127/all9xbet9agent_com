import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Setting from '@/models/Setting';
import { defaultSettings, normalizeSiteName, sanitizeBrandText } from '@/lib/seedData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
};

export async function GET() {
  try {
    const conn = await dbConnect();
    let settings = { ...defaultSettings };

    if (conn) {
      const dbSettings = await Setting.find({}).lean();
      dbSettings.forEach(s => {
        settings[s.key] = s.value;
      });

      const normalizedName = normalizeSiteName(settings.site_name);
      if (settings.site_name !== normalizedName) {
        settings.site_name = normalizedName;
        await Setting.findOneAndUpdate(
          { key: 'site_name' },
          { key: 'site_name', value: normalizedName },
          { upsert: true, new: true }
        ).catch(() => {});
      }
      if (settings.site_title) {
        settings.site_title = sanitizeBrandText(settings.site_title, settings.site_name);
      }
      if (settings.site_tagline) {
        settings.site_tagline = sanitizeBrandText(settings.site_tagline, settings.site_name);
      }

      return NextResponse.json(
        { success: true, data: settings },
        { headers: noCacheHeaders }
      );
    } else {
      return NextResponse.json(
        { success: false, error: 'Database not connected', data: defaultSettings },
        { status: 503, headers: noCacheHeaders }
      );
    }
  } catch (error) {
    console.error('API Settings GET Error:', error);
    return NextResponse.json(
      { success: false, error: error.message, data: defaultSettings },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const conn = await dbConnect();

    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database not connected. Cannot save settings permanently.' },
        { status: 503, headers: noCacheHeaders }
      );
    }

    for (const [key, value] of Object.entries(body)) {
      await Setting.findOneAndUpdate(
        { key },
        { key, value },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Settings saved successfully to MongoDB' },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Settings POST Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}
