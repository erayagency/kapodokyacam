import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { aboutContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Kapadokya Cam hakkında detaylı bilgi, geri dönüşüm nedir, çevre politikamız.",
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
      <section className="py-[70px]">
        <div className="container mx-auto px-4">
          <div
            className="prose max-w-none [&_img]:max-w-full [&_img]:mb-4 [&_li]:list-disc [&_li]:ml-10 [&_li]:mb-4"
            dangerouslySetInnerHTML={{ __html: aboutContent }}
          />
        </div>
      </section>
    </>
  );
}
