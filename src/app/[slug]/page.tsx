import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { services, blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = services.map((s) => ({ slug: s.slug }));
  const blogSlugs = blogPosts.map((b) => ({ slug: b.slug }));
  return [...serviceSlugs, ...blogSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const post = blogPosts.find((b) => b.slug === slug);
  const item = service || post;
  if (!item) return { title: "Sayfa Bulunamadı" };
  return { title: item.title };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const post = blogPosts.find((b) => b.slug === slug);

  if (!service && !post) notFound();

  const isService = !!service;
  const page = service || post!;

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    ...(isService
      ? [{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }]
      : [{ label: "Blog", href: "/blog" }]),
    { label: page.title },
  ];

  const detailImage = isService
    ? page.image.replace("/default/", "/")
    : page.image.replace("/default/", "/");

  return (
    <>
      <Breadcrumb title={page.title} items={breadcrumbItems} />

      {isService ? (
        <section className="py-[70px]">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <img src={detailImage} alt={page.title} className="float-right max-w-[400px] ml-4 mb-4" />
            </div>
            <div
              className="prose max-w-none [&_p]:mb-4 [&_li]:list-disc [&_li]:ml-10 [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />

            <div className="mt-12">
              <h2 className="section-title">Diğer Hizmetlerimiz</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services
                  .filter((s) => s.slug !== slug)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 12)
                  .map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`} className="block">
                      <div className="p-2.5 bg-white rounded-md shadow-md mb-4 hover:scale-[1.03] transition-transform">
                        <div className="text-center mb-4">
                          <img src={s.image} alt={s.title} className="mx-auto min-h-[166px] object-cover" />
                        </div>
                        <div className="text-center font-semibold text-dark">{s.title}</div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-[70px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <img src={detailImage} alt={page.title} className="max-w-full mb-4" />
                <p className="text-lg">{page.title}</p>
              </div>
              <div className="md:w-1/3">
                <div className="shadow-md rounded-md">
                  <div className="text-center text-xl font-semibold p-2.5 text-dark border-b border-gold mb-5">
                    Diğer Blog Yazı
                  </div>
                  {blogPosts
                    .filter((b) => b.slug !== slug)
                    .map((b) => (
                      <div key={b.slug} className="mb-8 px-4">
                        <div className="relative w-full overflow-hidden group">
                          <div className="absolute left-0 bottom-0 z-[1] w-full p-5 bg-[rgba(196,154,108,0.77)] top-[62%] group-hover:top-0 group-hover:p-10 transition-all duration-300">
                            <Link href={`/${b.slug}`}>
                              <div className="text-white text-lg font-semibold h-[70px] line-clamp-3">{b.title}</div>
                            </Link>
                            <div className="mt-4 text-center">
                              <Link href={`/${b.slug}`} className="btn-dark">
                                Yazıyı Oku
                              </Link>
                            </div>
                          </div>
                          <img src={b.image} alt={b.title} className="w-full" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
