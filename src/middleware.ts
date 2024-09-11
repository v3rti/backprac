import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest){

  console.log(`log from middleware: ${req.method}, ${req.url}`)


  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: '/api/:path*',
}
