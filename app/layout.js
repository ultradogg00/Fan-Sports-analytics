import localFont from "next/font/local";
import { AuthContextProvider, useUserAuth } from "./_utils/auth-context";
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
    <html lang="en"  className="bg-mainGrey">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mainGrey`}
      >
        <div className="ml-4 p-3 ">
            <h1 className=" text-3xl italic">FanAnalytics</h1> 
    
        </div>
        <AuthContextProvider>{children}</AuthContextProvider>
        
      </body>
    </html>
  );
}
