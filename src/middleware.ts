/** @format */

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_ROUTES = ["/login"];

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const token = request.cookies.get("token")?.value;

//   const isPublic = PUBLIC_ROUTES.includes(pathname);

//   if (!token && !isPublic) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (token && pathname === "/login") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
