import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'

/* Font files can be colocated inside of `pages`
const gilroy = localFont({
  src: [
    {
      path: '../fonts/Gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})*/

const myFont = localFont({ src: '../fonts/Gilroy/Gilroy-Regular.ttf' })




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizzaria Loumar",
  description: "Teste Front-end Junior Pizza",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}


      </body>

    </html>
  );
}

