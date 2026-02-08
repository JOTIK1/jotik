// src/app/auth/success/page.tsx
import { Suspense } from "react";
import SuccessClient from "@/app/auth/success/success-client"; 

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
