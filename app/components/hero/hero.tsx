import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <Box>
            <Box className={styles.upperbox}></Box>
            <Box className={styles.imagebox}>
                <Image
                    className={styles.image}
                    src={'/BANNER DESKTOP.png'}
                    alt='logo'
                    layout='fill'
                    objectFit='cover'
                />
            </Box>

        </Box>
    );
}
