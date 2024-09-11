import { NextResponse, NextRequest } from "next/server";
import prisma from '@/app/lib/prisma';

export async function GET(req: Request){
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}


export async function POST(req: Request){
  const body = await req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(user, { status: 201 })
}
