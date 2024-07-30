"use client"
import { useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import WhatsAppIcon from '../../../public/whatsapp-line.svg'
import styles from "./navbar.module.css";
import Image from "next/image";


const links = [
  {
    title: "Bloco 1",
    path: 454,

  },
  {
    title: "FAQ",
    path: 1015,

  },
  {
    title: "CONTATO",
    path: 2117,

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
            <Typography
              className={styles.menu_item}
              variant="h1"
              color="secondary"
              onClick={() => {
                window.scroll({
                  top: link.path,
                  behavior: 'smooth'
                })
              }}>
              {link.title}
            </Typography>
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
          {links.map((link =>
            <Typography
              className={styles.menu_item}
              color="secondary"
              onClick={() => {
                window.scroll({
                  top: link.path,
                  behavior: 'smooth'
                })
              }}>
              {link.title}
            </Typography>
          ))}
        </div>
      }

    </Box>
  );
}


