import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db("visit_db");

  const data = await req.json();
  const referer = req.headers.get('referer') || '';
  
  // Get the IP address from x-forwarded-for or ip property
  const xForwardedFor = req.headers.get('x-forwarded-for');
  const ip = xForwardedFor ? xForwardedFor.split(',')[0].trim() : req.ip || '';

  const document = {
    query: data.query,
    ip: ip === '::1' ? '127.0.0.1' : ip, // Convert IPv6 localhost to IPv4
    urlPath: data.urlPath,
    time: data.time,
    device: data.device,
    browser: data.browser,
    os: data.os,
    loc: data.loc
  };

  try {
    const result = await db.collection("visit_collection").insertOne(document);
    return NextResponse.json({ message: "Data saved successfully", result });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
