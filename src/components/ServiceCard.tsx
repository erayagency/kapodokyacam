import Link from "next/link";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/${service.slug}`} className="block">
      <div className="p-2.5 bg-white rounded-md shadow-md mb-[35px] hover:scale-[1.03] transition-transform">
        <div className="text-center mb-4">
          <img src={service.image} alt={service.title} className="mx-auto min-h-[166px] object-cover" />
        </div>
        <div className="text-center font-semibold text-dark">{service.title}</div>
      </div>
    </Link>
  );
}
