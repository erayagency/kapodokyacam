import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { videos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Videolar",
  description: "Kapadokya Cam videoları - Geri dönüşüm çalışmalarımızdan videolar.",
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
      <section className="py-[70px] bg-[#efefef]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <a
                key={i}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md shadow-md overflow-hidden bg-white h-full"
              >
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-white bg-[rgba(0,0,0,0.05)]">
                    <i className="fas fa-play shadow-lg"></i>
                  </div>
                </div>
                <div className="p-2.5 font-semibold text-dark flex items-center">{video.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
