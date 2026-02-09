export const dynamic = "force-dynamic";
export const revalidate = 0;
import { Suspense } from "react";
import SignupClient from "./signup-client";

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SignupClient />
    </Suspense>
  );
}
