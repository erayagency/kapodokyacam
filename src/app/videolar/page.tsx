import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { videos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Videolar",
  description: "Kapadokya Cam videoları - Geri dönüşüm çalışmalarımızdan videolar.",
  alternates: { canonical: "/videolar" },
};

export default function Videolar() {
  return (
    <>
      <Breadcrumb
        title="Videolar"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Videolar" },
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
              { "@type": "ListItem", position: 2, name: "Videolar", item: "https://www.kapadokyacam.com.tr/videolar" },
            ],
          }),
        }}
      />
      <ScrollReveal>
        <section className="py-[70px] bg-[#efefef]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <a
                  key={i}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md shadow-md overflow-hidden bg-white h-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center text-5xl text-white bg-[rgba(0,0,0,0.05)] group-hover:bg-[rgba(0,0,0,0.2)] transition-colors">
                      <i className="fas fa-play-circle drop-shadow-lg group-hover:scale-110 transition-transform"></i>
                    </div>
                  </div>
                  <div className="p-3 font-semibold text-dark flex items-center group-hover:text-gold transition-colors">{video.title}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
