import { Geist, Geist_Mono, Great_Vibes, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";



const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kayode Olawoye Ministries",
  description:
    "A non-denominational Christian ministry focused on teaching and training believers in the five fold ministries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/images/logos/kom.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${dancingScript.variable} antialiased `}
      >
        <div className="min-h-screen text-gray-900 ">
          <Navbar />
          <main className=""> {children}</main>
        </div>
      </body>
    </html>
  );
}
