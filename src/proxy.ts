import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function proxy(request: NextRequest) {
  const token = request.cookies.get('wealthmind_admin_token')?.value

  // Protect the dashboard path
  if (request.nextUrl.pathname.startsWith('/wm-portal/dashboard')) {
    if (!token) {
      const loginUrl = new URL('/wm-portal/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Redirect from login if already authenticated
  if (request.nextUrl.pathname.startsWith('/wm-portal/login')) {
    if (token) {
      const dashboardUrl = new URL('/wm-portal/dashboard', request.url)
      return NextResponse.redirect(dashboardUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/wm-portal/dashboard/:path*', '/wm-portal/login'],
}
