import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Kapadokya Cam blog yazıları - Geri dönüşüm, çevre ve atık yönetimi hakkında bilgilendirici yazılar.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <Breadcrumb
        title="Blog"
        items={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog" },
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
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.kapadokyacam.com.tr/blog" },
            ],
          }),
        }}
      />
      <ScrollReveal>
        <section className="py-[70px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
