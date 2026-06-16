import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { references } from "@/lib/data";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description: "Kapadokya Cam referansları - Birlikte çalıştığımız kurum ve kuruluşlar.",
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
      <section className="py-[70px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {references.map((ref, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-md shadow-md flex items-center justify-center h-[150px]"
              >
                <img src={ref.image} alt={ref.name} className="max-h-full max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
