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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Kapadokya Cam | Geri Dönüşüm ve Atık Yönetimi",
    description:
      "Kapadokya Cam Geri Dönüşüm ve İnşaat Sanayi Limited Şirketi - Tehlikesiz atık toplama ayırma ve geri kazanım hizmetleri.",
    url: "https://www.kapadokyacam.com.tr",
    siteName: "Kapadokya Cam",
    images: [
      {
        url: "/yuklemeler/imaj/logo-1.png",
        width: 300,
        height: 100,
        alt: "Kapadokya Cam",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapadokya Cam | Geri Dönüşüm ve Atık Yönetimi",
    description:
      "Kapadokya Cam Geri Dönüşüm ve İnşaat Sanayi Limited Şirketi - Tehlikesiz atık toplama ayırma ve geri kazanım hizmetleri.",
  },
  other: {
    "google-site-verification": "whx99T7FkuTLo5I0mlmudvwtds24PNaZVXUxDkZWCtM",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
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
