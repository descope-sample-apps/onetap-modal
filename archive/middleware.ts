import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the query parameters exist
  const code = url.searchParams.get('code');
  const descopeLoginFlow = url.searchParams.get('descope-login-flow');

  if (code && descopeLoginFlow) {
    // Retain the original query parameters in the redirect URL
    const newUrl = new URL('/login', request.url);
    newUrl.searchParams.set('code', code);
    newUrl.searchParams.set('descope-login-flow', descopeLoginFlow);
    return NextResponse.redirect(newUrl);
  }

  // Continue with the request if the parameters are not present
  return NextResponse.next();
}

// Specify which paths should use the middleware
export const config = {
  matcher: '/', // Apply middleware to the root path, adjust as needed
};
