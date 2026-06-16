import Link from "next/link";
import type { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="mb-8">
      <div className="relative w-full overflow-hidden group rounded-md">
        <div className="absolute left-0 bottom-0 z-[1] w-full p-5 md:p-6 bg-[rgba(196,154,108,0.77)] top-[62%] group-hover:top-0 group-hover:p-10 transition-all duration-300">
          <Link href={`/${post.slug}`}>
            <div className="text-white text-lg font-semibold h-[70px] line-clamp-3">{post.title}</div>
          </Link>
          <div className="mt-4 text-center">
            <Link href={`/${post.slug}`} className="btn-dark text-sm">
              Yazıyı Oku
            </Link>
          </div>
        </div>
        <img src={post.image} alt={post.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
      </div>
    </div>
  );
}
