export function middleware(request) {
  // This middleware file helps Vercel recognize the api folder
  return new Response('OK');
}

export const config = {
  matcher: '/api/:path*',
};
