import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Kapadokya Cam hakkında detaylı bilgi, geri dönüşüm nedir, çevre politikamız.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Hakkimizda() {
  return (
    <>
      <Breadcrumb
        title="Hakkımızda"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Kapadokya Cam", item: "https://www.kapadokyacam.com.tr" },
              { "@type": "ListItem", position: 2, name: "Hakkımızda", item: "https://www.kapadokyacam.com.tr/hakkimizda" },
            ],
          }),
        }}
      />
      <ScrollReveal>
        <section className="py-[70px]">
          <div className="container mx-auto px-4">
            <div
              className="prose max-w-none [&_img]:max-w-full [&_img]:mb-4 [&_img]:rounded [&_img]:shadow-md [&_li]:list-disc [&_li]:ml-10 [&_li]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_strong]:text-dark [&_ol]:ml-5 [&_ol_li]:list-decimal [&_ol_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: aboutContent }}
            />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
