import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Agent from '@/models/Agent';
import { sanitizeBrandText } from '@/lib/seedData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const noCacheHeaders = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search')?.toLowerCase();

    const conn = await dbConnect();

    if (!conn) {
      console.error('[API Agents GET] Database connection failed.');
      return NextResponse.json(
        {
          success: false,
          error: 'Database connection failed. Please ensure MONGODB_URI is set and MongoDB Atlas allows connection from anywhere (0.0.0.0/0).',
          data: []
        },
        { status: 503, headers: noCacheHeaders }
      );
    }

    let query = {};
    if (category && category !== 'All') {
      query.category = { $regex: new RegExp(`^${category}$`, 'i') };
    }

    let agents = await Agent.find(query).sort({ order: 1, createdAt: 1 }).lean();
    agents = agents.map(a => ({
      ...a,
      name: sanitizeBrandText(a.name),
      role: sanitizeBrandText(a.role),
      area: sanitizeBrandText(a.area)
    }));

    if (search) {
      agents = agents.filter(a => 
        a.name?.toLowerCase().includes(search) ||
        a.agentId?.toLowerCase().includes(search) ||
        a.area?.toLowerCase().includes(search) ||
        a.category?.toLowerCase().includes(search) ||
        a.whatsapp?.includes(search)
      );
    }

    return NextResponse.json(
      { success: true, count: agents.length, data: agents },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Agents GET Error:', error);
    return NextResponse.json(
      { success: false, error: error.message, data: [] },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, agentId, area, whatsapp, category, role, status, image } = body;

    if (!name || !agentId || !whatsapp || !category) {
      return NextResponse.json(
        { success: false, error: 'Name, Agent ID, WhatsApp number, and Category are required' },
        { status: 400, headers: noCacheHeaders }
      );
    }

    const conn = await dbConnect();

    if (!conn) {
      console.error('[API Agents POST] Database connection failed.');
      return NextResponse.json(
        {
          success: false,
          error: 'Database not connected! Cannot save agent permanently. Please verify your MONGODB_URI and ensure MongoDB Atlas Network Access has 0.0.0.0/0 enabled.'
        },
        { status: 503, headers: noCacheHeaders }
      );
    }

    const formattedAgent = {
      serial: String(Math.floor(Math.random() * 90) + 10),
      name: name.trim(),
      agentId: String(agentId).trim(),
      area: (area || '').trim(),
      whatsapp: String(whatsapp).replace(/[^0-9]/g, '').trim(),
      category: category,
      role: role || `${category} Agent`,
      image: image || '/wp-content/uploads/2026/07/images.jpg',
      status: status || 'verified',
      order: Date.now()
    };

    const newAgent = await Agent.create(formattedAgent);

    return NextResponse.json(
      { success: true, data: newAgent },
      { status: 201, headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Agents POST Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function DELETE() {
  try {
    const conn = await dbConnect();
    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database not connected' },
        { status: 503, headers: noCacheHeaders }
      );
    }

    await Agent.deleteMany({});
    return NextResponse.json(
      { success: true, message: 'All agents deleted. Database is now clean.' },
      { headers: noCacheHeaders }
    );
  } catch (error) {
    console.error('API Agents DELETE Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: noCacheHeaders }
    );
  }
}
