'use client';

import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('error_key') || "defaultValue";

  const shouldError = paramValue === "true";

  if (shouldError) {
    throw new Error("Intentional Error");
  }
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
