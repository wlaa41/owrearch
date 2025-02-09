import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../utils/mongodb';

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db("visit_db");

  const data = await req.json();
  const referer = req.headers.get('referer') || '';
  
  // Get the IP address from x-forwarded-for or directly from the provided data
  const xForwardedFor = req.headers.get('x-forwarded-for');
  const ip = xForwardedFor ? xForwardedFor.split(',')[0].trim() : data.ip || '';

  // Construct the document with the full location data
  const document = {
    query: data.query,
    fullAddress: data.fullAddress,
    city: data.city,
    postcode: data.postcode,
    road: data.road,
    area: data.area,
    ip: ip === '::1' ? '127.0.0.1' : ip, // Convert IPv6 localhost to IPv4
    time: data.time,
  };

  try {
    const result = await db.collection("visit_collection_geo").insertOne(document);
    return NextResponse.json({ message: "Data saved successfully", result });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
