import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Kapadokya Cam geri dönüşüm hizmetleri - Toplama ayırma ve tehlikesiz atık geri kazanım.",
};

export default function Hizmetlerimiz() {
  return (
    <>
      <Breadcrumb
        title="Hizmetlerimiz"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz" },
        ]}
      />
      <ScrollReveal>
        <section className="py-[70px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
