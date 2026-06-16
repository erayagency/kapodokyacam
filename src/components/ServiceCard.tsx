import Link from "next/link";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/${service.slug}`} className="block group">
      <div className="p-2.5 bg-white rounded-md shadow-md mb-[35px] hover:shadow-lg group-hover:scale-[1.03] transition-all duration-300">
        <div className="text-center mb-4 overflow-hidden rounded">
          <img
            src={service.image}
            alt={service.title}
            className="mx-auto w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="text-center font-semibold text-dark group-hover:text-gold transition-colors">{service.title}</div>
      </div>
    </Link>
  );
}
