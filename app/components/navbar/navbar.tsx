import styles from "./navbar.module.css"
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.logo}>

        </div>
        <div className={styles.links}>
          <a href="">Bloco 1</a>
          <a href="">FAQ</a>
          <a href="">Contato</a>
        </div>
        <div className={styles.btn}>
          <button>Entre em contato</button>
        </div>

      </div>

      <div className={styles.image}>

      </div>


    </div>

  );
}


//<Image src="/BANNER DESKTOP.png" alt="" fill className={styles.heroImg} />