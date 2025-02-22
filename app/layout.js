import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bakery",
  description: "Best Edibles...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={
          {
            // backgroundImage: "url('/images/melted-drip.png')",
            // backgroundSize: "contain",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }
        }
      >
        <Header />
        {/* <div>NavBar</div> */}
        {children}
      </body>
    </html>
  );
}
