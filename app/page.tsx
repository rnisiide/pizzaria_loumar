"use client";
import { Container, Box, ThemeProvider, createTheme } from "@mui/material";
import theme from "../theme";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Bloco_1 from "./components/bloco_1/bloco_1";
import Faq from "./components/faq/faq";
import Contato from "./components/contato/contato";


export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <Container
        sx={{
          width: 1216,
        }}

      >
        <Bloco_1 />
        <Faq />
        <Contato />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
