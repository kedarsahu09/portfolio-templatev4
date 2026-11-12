import { NextResponse } from 'next/server';
import { BACKEND } from './lib/modules';

// With the backend off, API routes return 404.
export function middleware() {
  if (!BACKEND) return new NextResponse('Not found', { status: 404 });
  return NextResponse.next();
}

export const config = { matcher: ['/api/:path*'] };
