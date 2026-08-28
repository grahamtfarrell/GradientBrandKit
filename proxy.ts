import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_COOKIE } from "@/lib/gate";

export function proxy(request: NextRequest) {
  if (request.cookies.get(GATE_COOKIE)?.value === "1") {
    return NextResponse.next();
  }
  return new NextResponse("Unauthorized", { status: 401 });
}

export const config = {
  matcher: ["/slides/:path*", "/brand/:path*", "/downloads/:path*"],
};
