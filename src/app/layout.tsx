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
  metadataBase: new URL("https://www.kapadokyacam.com.tr"),
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/yuklemeler/imaj/logo-1.png" },
  other: {
    "google-site-verification": "whx99T7FkuTLo5I0mlmudvwtds24PNaZVXUxDkZWCtM",
    "content-language": "tr",
  },
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
        <script src="https://www.google.com/recaptcha/api.js?hl=tr" async defer></script>
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
