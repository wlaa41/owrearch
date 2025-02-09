// src/app/getVisits/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export const dynamic = 'force-dynamic'

export async function GET() {
  const client = await clientPromise;
  const db = client.db('visit_db');
  const sessions = await db.collection('visit_collection_geo').find().sort({ time: -1 }).toArray(); // Sort by time descending
  return NextResponse.json(sessions);
}


