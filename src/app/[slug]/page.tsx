import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
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

  const detailImage = page.image.replace("/default/", "/");

  const breadcrumbLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.label,
      item: item.href ? `https://www.kapadokyacam.com.tr${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
      />

      <Breadcrumb title={page.title} items={breadcrumbItems} />

      {isService ? (
        <ScrollReveal>
          <section className="py-8 md:py-[70px]">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <img
                  src={detailImage}
                  alt={page.title}
                  className="float-none md:float-right max-w-full md:max-w-[400px] w-full md:ml-6 mb-6 rounded shadow-md"
                  loading="lazy"
                />
              </div>
              <div
                className="prose max-w-none [&_p]:mb-4 [&_p]:leading-relaxed [&_li]:list-disc [&_li]:ml-10 [&_li]:mb-2 [&_strong]:text-dark"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />

              <div className="mt-16 clear-both">
                <h2 className="section-title">Diğer Hizmetlerimiz</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services
                    .filter((s) => s.slug !== slug)
                    .slice(0, 12)
                    .map((s) => (
                      <Link key={s.slug} href={`/${s.slug}`} className="block group">
                        <div className="p-2.5 bg-white rounded-md shadow-md mb-4 group-hover:shadow-lg group-hover:scale-[1.03] transition-all duration-300">
                          <div className="text-center mb-4 overflow-hidden rounded">
                            <img
                              src={s.image}
                              alt={s.title}
                              className="mx-auto w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-center font-semibold text-dark group-hover:text-gold transition-colors">{s.title}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      ) : (
        <ScrollReveal>
          <section className="py-8 md:py-[70px]">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <img src={detailImage} alt={page.title} className="max-w-full mb-6 rounded shadow-md" loading="lazy" />
                  <div className="prose max-w-none">
                    <p className="text-lg leading-relaxed">{page.title}</p>
                    {page.content && (
                      <div
                        className="[&_p]:mb-4 [&_p]:leading-relaxed [&_li]:list-disc [&_li]:ml-10 [&_li]:mb-2 [&_strong]:text-dark"
                        dangerouslySetInnerHTML={{ __html: page.content }}
                      />
                    )}
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="shadow-md rounded-md sticky top-24">
                    <div className="text-center text-xl font-semibold p-2.5 text-dark border-b-2 border-gold mb-5">
                      Diğer Blog Yazıları
                    </div>
                    {blogPosts
                      .filter((b) => b.slug !== slug)
                      .map((b) => (
                        <div key={b.slug} className="mb-6 px-4">
                          <div className="relative w-full overflow-hidden group rounded-md">
                            <div className="absolute left-0 bottom-0 z-[1] w-full p-4 bg-[rgba(196,154,108,0.77)] top-[62%] group-hover:top-0 group-hover:p-8 transition-all duration-300">
                              <Link href={`/${b.slug}`}>
                                <div className="text-white text-base font-semibold h-[60px] line-clamp-3">{b.title}</div>
                              </Link>
                              <div className="mt-3 text-center">
                                <Link href={`/${b.slug}`} className="btn-dark text-sm px-6 py-1.5">
                                  Yazıyı Oku
                                </Link>
                              </div>
                            </div>
                            <img src={b.image} alt={b.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}
    </>
  );
}
