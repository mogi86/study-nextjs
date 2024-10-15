import Link from "next/link";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const paramValue = searchParams.error_key || "defaultValue";

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
