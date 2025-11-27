import createMiddleware from "next-intl/middleware"
import { routing } from "@/app/localization/routing"
import { NextRequest, NextResponse } from "next/server"

// export default createMiddleware(routing)
const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value

  // Protect routes
  if (
    (!token || token !== "0caa73be811ae62027817570b89e6dff") &&
    request.nextUrl.pathname !== "/login"
  ) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const response = intlMiddleware(request)

  // When next-intl wants to redirect, response.status is 307
  if (response.status === 307 && response.headers.has("location")) {
    // Re-issue the redirect with 301
    return NextResponse.redirect(<string>response.headers.get("location"), {
      status: 301,
    })
  }

  // Otherwise, return the original response
  return response
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|icon.png|apple-touch-icon.png|lovable-uploads|favicon.svg|images/books|icons|manifest).*)",
  ],
}
