import Link from "next/link";

export function Hero() {
  return (
    <section className="container py-24">
      <p className="text-sm uppercase tracking-wide text-gray-600">Digital Growth Partner</p>
      <h1 className="mt-2 text-4xl font-bold">Grow revenue with performance marketing.</h1>
      <p className="mt-4 max-w-2xl text-gray-700">
        A starter marketing site focused on speed, SEO, and clear conversion paths.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/contact" className="btn btn-primary">Book a Strategy Call</Link>
        <Link href="/services" className="btn btn-secondary">View Services</Link>
      </div>
    </section>
  );
}
