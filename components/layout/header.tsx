import Link from "next/link";

export function Header() {
  return (
    <header className="container py-6 flex items-center justify-between">
      <Link href="/" className="font-bold">Fenway Marketing</Link>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
