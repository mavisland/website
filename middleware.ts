import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Middleware artık sadece gelecekte korumalı rotalar için bir yapı sağlıyor
  // Şu anda aktif bir koruma işlemi yapmıyor
  // İhtiyaç duyduğunuzda, kendi kimlik doğrulama sisteminizi ekleyebilirsiniz

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
