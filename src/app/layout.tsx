import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: {
    default: "Kapadokya Cam | Geri Dönüşüm ve Atık Yönetimi",
    template: "%s | Kapadokya Cam",
  },
  description:
    "Kapadokya Cam Geri Dönüşüm ve İnşaat Sanayi Limited Şirketi - Tehlikesiz atık toplama ayırma ve geri kazanım hizmetleri.",
  icons: { icon: "/yuklemeler/imaj/logo-1.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
