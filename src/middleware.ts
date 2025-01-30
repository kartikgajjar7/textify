import NextAuth from "next-auth";
import authConfig from "./auth.config";
const { auth } = NextAuth(authConfig);
import {
  DEFAULT_REDIRECT,
  apiAuthprefix,
  authRoutes,
  publickRoutes,
} from "@/routes";
export default auth((req) => {
  const { nextUrl } = req;
  const isloggedin = !!req.auth;
  const isapiroute = nextUrl.pathname.startsWith("/api");
  const ispublickroute = publickRoutes.includes(nextUrl.pathname);
  const isauthroute = authRoutes.includes(nextUrl.pathname);
  if (isapiroute) {
    return;
  }
  if (isauthroute) {
    if (isloggedin) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isloggedin && !ispublickroute) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }
  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
