import { Box, Container, AppBar, Toolbar, Button, Link } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <Box
      position="fixed"
      className={styles.header}
    >

      <Box
        className={styles.wrapper}>
        <Box
          component="img"
          sx={{
            height: 74.47,
            width: 118,
          }}
          alt="Logo pizzaria"
          src="./Logo.png"
        />

        <Box
          className={styles.menu}
          sx={{
            display: 'flex',
            gap: 4,
            justifyContent: 'space-around',
            fontSize: 14,
            fontWeight: 600,
            alignItems: 'center'
          }}
        >
          <Link className={styles.link} color="secondary" href="#bloco_1">Bloco 1</Link>
          <Link className={styles.link} color="secondary" href="#faq">FAQ</Link>
          <Link className={styles.link} color="secondary" href="#contato">Contato</Link>
        </Box>

        <Button
          className={styles.btn}
          startIcon={<WhatsAppIcon />}
          variant="contained"
          color="secondary"
          target="_blank"
          href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
        > Entre em contato
        </Button>

      </Box>

    </Box>
  );
}


