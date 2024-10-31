import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../providers/providers";
import { lora,openSans } from "./fonts/font";
import MyNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';



export const metadata: Metadata = {
  title: "The code Canvas",
  description: "The Code Canvas is a web development agency dedicated to crafting innovative, high-performance websites. Our team specializes in custom solutions tailored to elevate your brand's online presence. Discover how The Code Canvas can bring your vision to life.",
  icons: {
    icon:"/favicon.svg"
  }
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
        <NextTopLoader color="#DAC5A7" showSpinner={false}/>
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
