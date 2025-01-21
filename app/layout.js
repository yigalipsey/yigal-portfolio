import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// יבוא הפונטים מ-Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// יבוא פונט מקומי - Varela Round
const varelaRound = localFont({
  src: "../public/fonts/VarelaRound-Regular.ttf", // וודא שהפונט נמצא בנתיב הזה
  variable: "--font-varela",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Yigal Lipsey - Fullstack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
