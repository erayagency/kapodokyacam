import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kapadokya Cam ürün galerisi - Geri dönüşüm çalışmalarımızdan görseller.",
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
