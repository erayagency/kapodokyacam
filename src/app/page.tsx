import Link from "next/link";
import { services, blogPosts, videos, siteConfig } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";
import { BlogCard } from "@/components/BlogCard";
import { VideoCard } from "@/components/VideoCard";
import SwiperClient from "@/components/SwiperClient";

export default function Home() {
  const toplamaAyirmaServices = services.filter((s) => s.category === "toplama-ayirma");
  const geriKazanimServices = services.filter((s) => s.category === "geri-kazanim");
  const sliderServices = services.filter(
    (s) =>
      s.slug === "imha-ve-tasfiye-edilecek-urunler" ||
      s.slug === "organik-ve-anorganik-atiklar"
  );

  return (
    <>
      <section className="bg-white">
        <div className="swiper slider-owl-1 relative">
          <div className="relative">
            <Link href="/iletisim">
              <img
                src="/yuklemeler/slayt/geridonusum.jpg"
                alt="Geri Dönüşüm"
                className="w-full"
              />
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[700px] text-dark text-lg text-center">
                Türkiye Cumhuriyeti Gümrük Müdürlüklerinin depo ve antrepo hizmeti veren kuruluşların raf ömrü sınırlı veya tarihi geçmiş
                dış ambalajı hatalı olan tüketime ve işlemeye uygun olmayan ürünlerin imha ve geri kazanım işlemlerini gerçekleştirmekteyiz.
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[70px] md:py-[70px] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="text-center md:text-left">
                <h2 className="text-[25px] font-semibold text-dark mb-5">Hakkımızda</h2>
                <div className="font-light mb-5">
                  <p>Türkiye Cumhuriyeti gümrük müdürlüklerinin, depo ve antrepo hizmeti veren kuruluşlarının, raf ömrü sınırlı tarihi geçmiş, dış ambalajı hatalı olup ta piyasaya sürülmeden uzun süreli bekleyen ürünlerinin imhasını yapmaktayız.</p>
                  <p className="mt-4">Aynı zamanda çeşitli sektörlerde hizmet veren uluslararası markaların (Versace, Chanel, Pernod Ricard, Adidas, New Balance... vs.), piyasaya sürülmeden yakalanan sahte ürünlerinin imhasını da yapmaktayız.</p>
                </div>
                <div>
                  <Link href="/hakkimizda" className="btn-gold">
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/yuklemeler/gorsel/green.png" alt="Kapadokya Cam" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[70px] bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Toplama Ayırma Lisansı İle Yaptıklarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toplamaAyirmaServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <h2 className="section-title mt-8">Tehlikesiz Atık Geri Kazanım Lisansı İle Yaptıklarımız</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {geriKazanimServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 text-center text-white bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(49,46,46,0.65),rgba(9,20,12,0.51)), url(/images/cta-bg.png)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-[28px] font-bold mb-8">Şirketimizin Lisans Belgeleri</h2>
          <p className="mb-8">
            Profesyonel bir biçimde hizmetlerini sürdüren tesisimiz aynı zamanda gerekli lisanslama süreçlerinden de başarıyla geçti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.pdfs.map((pdf, i) => (
              <a key={i} href={pdf.url} className="btn-gold" target="_blank" rel="noopener noreferrer">
                {pdf.label} <i className="fa-solid fa-file-pdf ml-2"></i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Blog Yazıları</h2>
          <SwiperClient
            className="blog-slider"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </SwiperClient>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-gold">
              Tüm Blog Yazıları
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[70px] bg-[#efefef]">
        <div className="container mx-auto px-4">
          <SwiperClient
            className="video-slider"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))}
          </SwiperClient>
          <div className="text-center mt-8">
            <Link href="/videolar" className="btn-gold">
              Tüm Videolar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
