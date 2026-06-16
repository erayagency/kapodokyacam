import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Kapadokya Cam çerez politikası - Web sitemizde kullanılan çerezler hakkında bilgi.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasi() {
  return (
    <>
      <Breadcrumb
        title="Çerez Politikası"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Çerez Politikası" },
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
              { "@type": "ListItem", position: 2, name: "Çerez Politikası", item: "https://www.kapadokyacam.com.tr/cerez-politikasi" },
            ],
          }),
        }}
      />
      <ScrollReveal>
        <section className="py-[70px]">
          <div className="container mx-auto px-4 prose max-w-none">
            <h2 className="text-2xl font-semibold text-dark mb-6">Çerez Politikası</h2>

            <p className="mb-4 leading-relaxed">
              Bu Çerez Politikası, Kapadokya Cam Geri Dönüşüm ve İnşaat Sanayi Limited Şirketi olarak web sitemizde kullanılan çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-3">Çerez Nedir?</h3>
            <p className="mb-4 leading-relaxed">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını sağlamanın yanı sıra site sahiplerine ziyaretçi davranışları hakkında bilgi verir.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-3">Hangi Çerezleri Kullanıyoruz?</h3>
            <p className="mb-4 leading-relaxed">
              Web sitemizde aşağıdaki çerez türlerini kullanmaktayız:
            </p>
            <ul className="list-disc ml-8 mb-4 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gerekli olan çerezlerdir.</li>
              <li><strong>Analitik Çerezler:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir (örn. Google Analytics).</li>
              <li><strong>İşlevsel Çerezler:</strong> Site tercihlerinizi hatırlamak için kullanılan çerezlerdir.</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-3">Çerezleri Nasıl Kontrol Edebilirsiniz?</h3>
            <p className="mb-4 leading-relaxed">
              Tarayıcınızın ayarlarından çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. Çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.
            </p>

            <h3 className="text-xl font-semibold text-dark mt-8 mb-3">İletişim</h3>
            <p className="mb-4 leading-relaxed">
              Çerez politikamız hakkında sorularınız için <strong>info@kapadokyacam.com.tr</strong> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
