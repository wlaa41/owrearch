// src/app/getVisits/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export const dynamic = 'force-dynamic'


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('visit_db');
    const sessions = await db.collection('visit_collection').find().sort({ time: -1 }).toArray();
    console.log('Fetched sessions from DB:', sessions);

    const response = NextResponse.json(sessions);
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    
    return response;
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}