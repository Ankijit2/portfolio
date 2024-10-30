import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../providers/providers";
import { lora,openSans } from "./fonts/font";
import MyNavbar from "@/components/navbar";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={` ${lora.variable} ${openSans.variable}`}>
    
      <body
      className="bg-background min-h-screen flex-col flex"
      >
        
        <Providers>
            <MyNavbar/>
            <div className="md:min-h-[60vh]">
        {children}
        </div>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
