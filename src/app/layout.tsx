import Headercomp from "../components/common/header/Headercomp";
import Footercomp from "../components/common/footer/Footercomp";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Headercomp />
        <main className="grow">{children}</main>
        <Footercomp />
      </body>
    </html>
  );
}
