import { Box, Container, AppBar, Toolbar, Button, Link } from "@mui/material";

export default function NavBar() {


  return (
    <Container>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          height: 130.47,
          bgcolor: '#FFB800',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}

      >
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 74.47,
              width: 118,
            }}
            alt="Logo pizzaria"
            src="./Logo.png"
          />
          <Box>
            <Link href="#bloco_1">Bloco 1</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contato">Contato</Link>



          </Box>

          <Button target="_blank" href="https://wa.me/5545988041417?text=Oi%20mensagem%0A">Entre em contato</Button>



        </Toolbar>
      </AppBar>





    </Container>


  );
}



/*

{links.map((link, index) => (
              <span key={index} className={`px-5 cursor-pointer ${activeSection == link && "text-orange-500"}`}>{link}</span>
            ))}




                        <ul>
              <li onClick={() => scrollToSection(bloco_1)}>Bloco 1</li>
              <li onClick={() => scrollToSection(faq)}>FAQ</li>
              <li onClick={() => scrollToSection(contact)}>Contato</li>
            </ul>

>*/