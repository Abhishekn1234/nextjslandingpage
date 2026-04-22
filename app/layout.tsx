import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-white overflow-x-hidden">

        {/* ✅ GLOBAL BACKGROUND DECOR */}
        <div className="absolute top-0 right-0 z-0 pointer-events-none">
          <Image
            src="/Decore.png"
            alt="decor"
            width={850}
            height={850}
            className="object-contain"
            priority
          />
        </div>

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Page content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* ✅ Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

      </body>
    </html>
  );
}