import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kapadokya Cam ürün galerisi - Geri dönüşüm çalışmalarımızdan görseller.",
  alternates: { canonical: "/galeri" },
};

export default function Galeri() {
  const images = galleryItems.map((item) => ({
    src: item.image.replace("/default/", "/"),
    alt: item.alt,
  }));

  return (
    <>
      <Breadcrumb
        title="Galeri"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Galeri" },
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
              { "@type": "ListItem", position: 2, name: "Galeri", item: "https://www.kapadokyacam.com.tr/galeri" },
            ],
          }),
        }}
      />
      <section className="py-[70px]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Lightbox images={images} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
