import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Kapadokya Cam blog yazıları - Geri dönüşüm, çevre ve atık yönetimi hakkında bilgilendirici yazılar.",
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
      <section className="py-[70px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
