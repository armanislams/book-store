import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET})
    console.log('token', token);
    if (!token) {
        
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next()
    

}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/dashboard/:path*",
};
