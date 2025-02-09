import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export const dynamic = 'force-dynamic'

export async function GET() {
  const client = await clientPromise;
  const db = client.db('visit_db');
  const sessions = await db.collection('session_collection').find().sort({ time: -1 }).toArray();
  return NextResponse.json(sessions);
}
