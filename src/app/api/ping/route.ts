import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    ok: true, 
    message: 'Conecta RH API online!',
    timestamp: new Date().toISOString() 
  });
}