export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";
import { Suspense } from "react";

const SuccessClient = dynamicImport(
  () => import("./SuccessClient"),
  { ssr: false }
);

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
