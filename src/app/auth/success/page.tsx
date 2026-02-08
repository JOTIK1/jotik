// src/app/auth/success/page.tsx

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500">
          Loading...
        </div>
      }
    >
      <SuccessClient />
    </Suspense>
  );
}
