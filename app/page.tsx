import Link from "next/link";
import { Hero } from "@/components/sections/hero";

const services = [
  { title: "SEO Strategy", description: "Technical and content SEO plans to drive qualified organic traffic." },
  { title: "Paid Media", description: "Performance campaigns across search and social with clear ROI tracking." },
  { title: "Conversion Optimization", description: "Landing-page and funnel improvements that increase lead volume." }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container py-16">
        <h2>What we do</h2>
        <div className="grid gap-6" style={{ marginTop: "1rem" }}>
          {services.map((service) => (
            <article key={service.title} style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem", padding: "1rem" }}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "4rem" }}>
        <h2>Website link</h2>
        <p>
          Public site URL: <Link href="https://fenwaymarketing.com">https://fenwaymarketing.com</Link>
        </p>
      </section>
    </>
  );
}
