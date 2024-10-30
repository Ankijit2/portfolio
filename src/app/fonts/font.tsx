import { Open_Sans } from "next/font/google";
import { Lora } from "next/font/google";


export const openSans = Open_Sans({
    subsets: ["latin"], // Adjust subsets as needed
    variable: "--font-open-sans", // Include desired weights
  });

  export const lora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
  })