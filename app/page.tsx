import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full flex gap-10 items-center p-10">
        <h1>This is not found</h1>
        <Link href="{/login}" className="p-4 rounded-md bg-slate-400">Go to login</Link>
        <Link href="{/register}" className="p-4 rounded-md bg-slate-400">Go to register</Link>
      </main>
    </>
  );
}
