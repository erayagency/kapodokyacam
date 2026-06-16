import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <section
      className="py-8 text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.4)), url(/yuklemeler/imaj/bread-bg.png)",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-[28px] font-semibold mb-5">{title}</h1>
        <ul className="flex justify-center text-white">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="text-white hover:text-[#9cc026]">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {i < items.length - 1 && <span className="mx-2.5">{">"}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
