import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

// Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-Inter',
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Ensure this matches font specifications
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // Ensure this matches font specifications
});

export const metadata: Metadata = {
  title: "SwiftFlow",
  description: "SwiftFlow is a modern banking platform",
  icons:{
    icon:'/icons'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
