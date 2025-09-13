import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          response.cookies.delete({
            name,
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Identify the paths you want to protect (e.g. admin pages)
  const protectedPaths = ["/admin"];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // If the user is not logged in and is trying to access a protected page, redirect to the login page
  if (!session && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all internal paths:
     * - Except /api routes (API routes)
     * Except for /_next/static, /_next/image paths (Next.js internal paths)
     * Excluding root files like /favicon.ico, /icon.png, /apple-icon.png, /sitemap.xml, etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.ico|icon.png|apple-icon.png|sitemap.xml).*)",
  ],
};
