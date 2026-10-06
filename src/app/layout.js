import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navber";
import { FitLogProvider } from "./provider";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Your personal workout library and fitness planner",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#1A1A1A] text-2xl">
        <FitLogProvider>
          <Navbar />

          <main>{children}</main>
          <Footer></Footer>
        </FitLogProvider>
      </body>
    </html>
  );
}
