import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const footerLinks = [
    { label: "Galeri", href: "/galeri" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <footer className="pt-12 md:pt-[70px] pb-20 md:pb-[70px] bg-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-white">
            <div className="md:w-1/2 flex flex-col md:flex-row justify-center items-center border-0 md:border-r md:border-white mb-5 md:mb-0">
              <img
                src="/yuklemeler/imaj/footer-logo-1.png"
                alt={siteConfig.name}
                className="max-h-20 mb-5 md:mb-0 md:mr-8"
                loading="lazy"
              />
            </div>
            <div className="hidden md:flex md:w-1/6 justify-center mt-3">
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:opacity-70 transition-opacity">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 text-center md:text-left">
              <p>
                <a href={`tel:${siteConfig.phone1Raw}`} className="text-white hover:opacity-70 transition-opacity">
                  <i className="fa-solid fa-phone mr-2"></i>
                  {siteConfig.phone1}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone2Raw}`} className="text-white hover:opacity-70 transition-opacity">
                  <i className="fa-solid fa-phone mr-2"></i>
                  {siteConfig.phone2}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email1}`} className="text-white hover:opacity-70 transition-opacity">
                  <i className="fa-solid fa-envelope mr-2"></i>
                  {siteConfig.email1}
                </a>
              </p>
              <p>
                <i className="fa-solid fa-map-signs mr-2"></i>
                {siteConfig.address}
              </p>
              <p className="mt-4 text-sm opacity-75">
                <a href="https://maviona.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Web Tasarım: Maviona</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gold z-[99] text-center shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
        <a
          href={`tel:${siteConfig.phone1Raw}`}
          className="flex items-center justify-center text-white font-bold text-[22px] py-[15px]"
        >
          <i className="fa fa-phone-square text-3xl mr-2 animate-pulse"></i>
          <span>HEMEN ARA</span>
        </a>
      </div>
    </>
  );
}
