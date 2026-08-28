import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_COOKIE, GATE_PASSWORD } from "@/lib/gate";

export async function POST(request: NextRequest) {
  let password = "";
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { password?: string };
    password = String(body.password ?? "");
  } else {
    const form = await request.formData();
    password = String(form.get("password") ?? "");
  }

  if (password !== GATE_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(GATE_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
