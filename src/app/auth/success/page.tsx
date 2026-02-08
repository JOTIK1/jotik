// src/app/auth/success/page.tsx
export const dynamic = "force-dynamic";

import SuccessClient from "./SuccessClient";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function SuccessPage({ searchParams }: Props) {
  const raw = searchParams?.status;
  const status = Array.isArray(raw) ? raw[0] : raw;

  return <SuccessClient status={status ?? "success"} />;
}
