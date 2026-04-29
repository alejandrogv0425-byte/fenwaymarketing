import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Fenway Marketing",
    template: "%s | Fenway Marketing"
  },
  description: "Performance-focused marketing website starter.",
  openGraph: {
    title: "Fenway Marketing",
    description: "Performance-focused marketing website starter.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
