import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export async function middleware(req) {
  const session = await getSession();
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }
}
