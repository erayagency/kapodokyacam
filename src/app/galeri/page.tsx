import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kapadokya Cam ürün galerisi - Geri dönüşüm çalışmalarımızdan görseller.",
};

export default function Galeri() {
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div key={i} className="p-2.5 bg-white rounded-md shadow-md text-center">
                <a href={item.image} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.alt} className="w-full rounded" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
