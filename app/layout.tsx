import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { createTheme } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Theme from '../theme';
import { Container, Box } from "@mui/material";
import Hero from "./components/hero/hero";
import Bloco_1 from "./components/bloco_1/bloco_1";
import Faq from "./components/FAQ/faq";
import Contato from "./components/contato/contato";


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
        <NavBar />

        <Box>
          <Hero />
          <Bloco_1 />
          <Faq />
          <Contato />
          <Footer />

        </Box>

      </body>

    </html>
  );
}

/*
        <AppRouterCacheProvider>
          <Theme>


          </Theme>

        </AppRouterCacheProvider>

*/
