import { cookies } from "next/headers";
import { GuidelinesApp } from "@/components/GuidelinesApp";
import { PasswordGate } from "@/components/PasswordGate";
import { GATE_COOKIE } from "@/lib/gate";

export default async function Home() {
  const jar = await cookies();
  if (jar.get(GATE_COOKIE)?.value !== "1") {
    return <PasswordGate />;
  }
  return <GuidelinesApp />;
}
