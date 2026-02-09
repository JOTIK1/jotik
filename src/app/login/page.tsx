export const dynamic = "force-dynamic";
export const revalidate = 0;
import { Suspense } from "react";
import LoginClient from "./login-client";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}
