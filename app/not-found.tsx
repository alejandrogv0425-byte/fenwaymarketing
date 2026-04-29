import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-16">
      <h1>404</h1>
      <p>Sorry, we couldn\'t find that page.</p>
      <Link href="/">Go home</Link>
    </section>
  );
}
