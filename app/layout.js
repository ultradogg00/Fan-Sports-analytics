import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fanlaltics",
  description: "Sports analytics for the fans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mainGrey`}
      >
        <div className="ml-4 p-3 mb-20">
            <h1 className=" text-3xl">Fanlaltics</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
