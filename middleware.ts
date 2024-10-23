// CLERK
// The clerkMiddleware helper enables authentication and is where you'll configure your protected routes.
// import { createRouteMatcher } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server"

// const isProtectedRoute = createRouteMatcher([
//   '/',
//   '/api(.*)',
//   '/forum(.*)', : all forum routes are protected
// ]);


// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
//   return NextResponse.next();

// });


// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-config-from-middleware', '-')

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-config-2-from-middleware', '.')
  return response
}
