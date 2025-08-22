import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const userRole = request.cookies.get("userRole")?.value

    if (userRole !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  if (pathname.startsWith("/agent") && !pathname.startsWith("/agent/login")) {
    const userRole = request.cookies.get("userRole")?.value

    if (userRole !== "agent") {
      return NextResponse.redirect(new URL("/agent/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/agent/:path*"],
}
