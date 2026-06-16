import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Kapadokya Cam iletişim bilgileri - Telefon, e-posta ve adres bilgilerimiz.",
};

export default function Iletisim() {
  return (
    <>
      <Breadcrumb
        title="İletişim"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />
      <ScrollReveal>
        <section className="pt-[70px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-[25px] font-semibold text-dark mb-5">İletişim</h2>

                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fa-solid fa-asterisk"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">{siteConfig.fullName}</div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fas fa-phone-square"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">
                    <a href={`tel:${siteConfig.phone1Raw}`} className="text-[#666] hover:text-dark transition-colors">{siteConfig.phone1}</a>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fas fa-phone-square"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">
                    <a href={`tel:${siteConfig.phone2Raw}`} className="text-[#666] hover:text-dark transition-colors">{siteConfig.phone2}</a>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">
                    <a href={`mailto:${siteConfig.email1}`} className="text-[#666] hover:text-dark transition-colors">{siteConfig.email1}</a>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">
                    <a href={`mailto:${siteConfig.email2}`} className="text-[#666] hover:text-dark transition-colors">{siteConfig.email2}</a>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-gold min-w-[50px] text-center">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="text-[#666] text-xl font-medium">{siteConfig.address}</div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-[25px] font-semibold text-dark mb-5">İletişim Formu</h2>
                <form action={siteConfig.formAction} method="POST">
                  <input type="text" name="name" className="w-full bg-[#f7f7f7] rounded-md border-none h-[50px] mb-4 px-3 outline-none focus:ring-2 focus:ring-gold/30 transition-shadow" placeholder="Ad Soyad veya Firma Adınız" required />
                  <input type="email" name="email" className="w-full bg-[#f7f7f7] rounded-md border-none h-[50px] mb-4 px-3 outline-none focus:ring-2 focus:ring-gold/30 transition-shadow" placeholder="E-posta Adresiniz" required />
                  <input type="tel" name="phone" className="w-full bg-[#f7f7f7] rounded-md border-none h-[50px] mb-4 px-3 outline-none focus:ring-2 focus:ring-gold/30 transition-shadow" placeholder="Telefon Numaranız" required />
                  <textarea name="message" className="w-full bg-[#f7f7f7] rounded-md border-none h-[160px] mb-4 p-3 outline-none resize-none focus:ring-2 focus:ring-gold/30 transition-shadow" placeholder="Mesajınız" required></textarea>
                  <button type="submit" className="bg-gold rounded-md text-white border-none py-2.5 px-[50px] font-bold text-lg hover:bg-dark transition-colors cursor-pointer">Gönder</button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-[50px]">
            <iframe
              src={siteConfig.googleMapsUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konum"
            ></iframe>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
