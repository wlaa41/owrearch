// src/app/api/trackSession/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db('visit_db');

  const data = await req.json();
  const referer = req.headers.get('referer') || '';

  const xForwardedFor = req.headers.get('x-forwarded-for');
  const ip = xForwardedFor ? xForwardedFor.split(',')[0].trim() : req.ip || '';

  const document = {
    ...data,
    ip: ip === '::1' ? '127.0.0.1' : ip, // Convert IPv6 localhost to IPv4
  };

  // Prevent duplicate session records
  const existingRecord = await db.collection('session_collection').findOne({ sessionId: data.sessionId });
  if (existingRecord) {
    return NextResponse.json({ message: 'Session data already saved' });
  }

  const result = await db.collection('session_collection').insertOne(document);
  return NextResponse.json({ message: 'Session data saved successfully', result });
}
