import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Tennis1",
  description: "Tennis1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body className={`${lexend.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
