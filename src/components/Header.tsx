"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

const socialIcons: Record<string, string> = {
  facebook: "fa-brands fa-facebook",
  twitter: "fa-brands fa-twitter",
  instagram: "fa-brands fa-instagram",
  youtube: "fa-brands fa-youtube",
};

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <section className="bg-gold py-1.5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex gap-4">
              <a href={`tel:${siteConfig.phone1Raw}`} className="hover:opacity-70">
                <i className="fa-solid fa-phone fa-flip-horizontal mr-1"></i>
                {siteConfig.phone1}
              </a>
              <a href={`tel:${siteConfig.phone2Raw}`} className="hover:opacity-70">
                <i className="fa-solid fa-phone fa-flip-horizontal mr-1"></i>
                {siteConfig.phone2}
              </a>
              <a href={`mailto:${siteConfig.email1}`} className="hover:opacity-70">
                <i className="fa-solid fa-envelope mr-1"></i>
                {siteConfig.email1}
              </a>
              <a href={`mailto:${siteConfig.email2}`} className="hover:opacity-70">
                <i className="fa-solid fa-envelope mr-1"></i>
                {siteConfig.email2}
              </a>
            </div>
            <div className="flex gap-4">
              {Object.entries(siteConfig.socialMedia).map(([key, url]) => (
                <a key={key} href={url} className="text-xl hover:opacity-70">
                  <i className={socialIcons[key]}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-2.5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="max-w-[300px]">
              <Link href="/">
                <img src="/yuklemeler/imaj/logo-1.png" alt={siteConfig.name} className="h-auto max-w-full" />
              </Link>
            </div>
            <nav>
              <ul className="flex">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-2.5 py-[37px] text-[15px] font-semibold hover:opacity-70 ${
                        pathname === item.href ? "text-gold" : "text-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="flex md:hidden items-center justify-between px-4 py-2.5 border-b-2 border-gold">
        <div>
          <Link href="/">
            <img src="/yuklemeler/imaj/logo-1.png" alt={siteConfig.name} className="max-w-[170px]" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${siteConfig.phone1Raw}`}>
            <i className="fa-solid fa-phone text-white bg-gold w-9 h-9 rounded-full flex items-center justify-center text-lg"></i>
          </a>
          <a href="https://www.google.com.tr/maps/place/Kapadokya+Cam" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-map-marker-alt text-white bg-[#a9d46f] w-9 h-9 rounded-full flex items-center justify-center text-lg"></i>
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-3xl bg-transparent border-none p-0 mx-2.5"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </section>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-[999]">
            <div className="bg-gold w-[75%] h-full pt-5">
              <div className="flex justify-around px-5 mb-5">
                <div className="text-center">
                  <Link href="/" className="text-white text-sm font-semibold" onClick={() => setMobileOpen(false)}>
                    <i className="fas fa-home block text-3xl mb-2.5"></i>
                    Ana Sayfa
                  </Link>
                </div>
                <div className="text-center">
                  <a href={`tel:${siteConfig.phone1Raw}`} className="text-white text-sm font-semibold">
                    <i className="fas fa-phone block text-3xl mb-2.5"></i>
                    {siteConfig.phone1}
                  </a>
                </div>
              </div>
              <Link
                href="/iletisim"
                className="block leading-10 text-white bg-dark text-center rounded mx-5 mb-2.5"
                onClick={() => setMobileOpen(false)}
              >
                Bize Ulaşın
              </Link>
              <ul className="flex justify-center gap-4 mb-5">
                {Object.entries(siteConfig.socialMedia).map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      className="border border-white w-[35px] h-[35px] rounded-full flex items-center justify-center text-white"
                    >
                      <i className={socialIcons[key]}></i>
                    </a>
                  </li>
                ))}
              </ul>
              <nav>
                <ul>
                  {siteConfig.navItems.map((item) => (
                    <li key={item.href} className="px-6 py-2.5">
                      <Link
                        href={item.href}
                        className="text-white font-semibold text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="fixed top-[18px] right-5 z-[9999]" onClick={() => setMobileOpen(false)}>
            <i className="fa-solid fa-times text-white text-2xl cursor-pointer"></i>
          </div>
        </>
      )}
    </>
  );
}
