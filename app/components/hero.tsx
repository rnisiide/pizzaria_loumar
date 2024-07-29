import { Box } from "@mui/material";
import Image from "next/image";

export default function Hero() {
    return (
        <Box>
            <Box
                sx={{
                    height: 130.47,
                }}>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 425,
                    position: 'relative'
                }}>
                <Image
                    src={'/BANNER DESKTOP.png'}
                    alt='logo'
                    layout='fill'
                    objectFit='cover'
                />
            </Box>



        </Box>




    );
}

/*

 <Box
                sx={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 425,
                }}
            >
                <Image
                    objectFit="cover"
                    fill

                    src="/BANNER DESKTOP.png"
                    alt="Logo pizzaria" />
            </Box>

*/