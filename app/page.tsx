"use client";
import { Container, Box, ThemeProvider, createTheme } from "@mui/material";
import theme from "../theme";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Bloco_1 from "./components/bloco_1";
import Faq from "./components/faq";
import Contato from "./components/contato";


export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <Box>
          <Hero />
          <Bloco_1 />
          <Faq />
          <Contato />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
