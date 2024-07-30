"use client"
import { useState } from "react";
import { Box, Button, Link } from "@mui/material";
import WhatsAppIcon from '../../../public/whatsapp-line.svg'
import styles from "./navbar.module.css";
import Image from "next/image";


const links = [
  {
    title: "Bloco 1",
    path: "#bloco_1",

  },
  {
    title: "FAQ",
    path: "#faq",

  },
  {
    title: "Contato",
    path: "#contato",

  },
];

export default function NavBar() {

  const [open, setOpen] = useState(false)

  return (
    <Box
      position="fixed"
      className={styles.header}
    >
      <Image
        className={styles.menuButton}
        src='/menu.svg'
        alt=''
        width={24}
        height={24}
        onClick={() => setOpen((prev) => !prev)} />

      <Box className={styles.wrapper}>
        <Box
          component="img"
          sx={{
            height: 53.01,
            width: 84,
          }}
          alt="Logo pizzaria"
          src="./Logo.svg"
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: 'smooth'
            });
          }}
        />

        <Box className={styles.menu}>
          {links.map((link =>
            <Link className={styles.menu_item} color="secondary" href={link.path} scroll={false}>{link.title}</Link>

          ))}
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

      {
        open && <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Link className={styles.menu_item} color="secondary" href={link.path} scroll={false}>{link.title}</Link>
          ))}
        </div>
      }

    </Box>
  );
}


