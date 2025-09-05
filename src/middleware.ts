import {
  MiddlewareConfig,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';
// import { getToken } from 'next-auth/jwt';

export const middleware: NextMiddleware = async (_req: NextRequest) =>
  // const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  // if (!token) {
  //   return NextResponse.redirect('/login');
  // }
  NextResponse.next();

export const config: MiddlewareConfig = {
  matcher: [
    '/api',
    // '/api/*',
    // '/admin',
    // '/admin/*',
    // '/logout',
    // '/user',
    // '/user/*',
  ],
};
