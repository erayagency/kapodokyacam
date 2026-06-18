import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { references } from "@/lib/data";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description: "Kapadokya Cam referansları - Birlikte çalıştığımız kurum ve kuruluşlar.",
  alternates: { canonical: "/referanslarimiz" },
};

export default function Referanslarimiz() {
  return (
    <>
      <Breadcrumb
        title="Referanslarımız"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Referanslarımız" },
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
              { "@type": "ListItem", position: 2, name: "Referanslarımız", item: "https://www.kapadokyacam.com.tr/referanslarimiz" },
            ],
          }),
        }}
      />
      <ScrollReveal>
        <section className="py-8 md:py-[70px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {references.map((ref, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-md shadow-md flex items-center justify-center h-[150px] hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <img src={ref.image} alt={ref.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
