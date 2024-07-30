import { Box, Typography } from "@mui/material";
import styles from "./bloco_1.module.css";


const items = [
    {
        icon: './icon1.svg',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
    {
        icon: './icon2.svg',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
    {
        icon: './icon3.svg',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
];

export default function Bloco_1() {
    return (
        <Box id="bloco_1" className={styles.wrapper}>
            <Box
                className={styles.bloco_img}
                component="img"
                alt="Logo pizzaria"
                src="./Pizza_derretendo_desktop.png"
            />

            <Box className={styles.bloco_texto}>
                <Typography
                    variant="h1"
                    sx={{
                        marginBottom: '8px',
                    }}>
                    Por que escolher Pizza SVG
                </Typography>
                <Typography variant="h2"
                    sx={{
                        marginBottom: '24px',
                    }}>
                    A melhor Pizza com o melhor atendimento da cidade
                </Typography>

                {items.map((item, index) => (
                    <Box
                        className={styles.bloco_item}
                        key={index}
                    >
                        <Box
                            width={48}
                            height={48}
                            component="img"
                            src={item.icon}
                            sx={{
                                padding: '12px',
                                marginRight: '12px',
                                border: 2,
                                borderColor: '#F2F4F7',
                                borderRadius: 2,
                                boxShadow: 1,
                            }}
                        />
                        <Box>
                            <Typography variant="subtitle1">
                                {item.title}
                            </Typography>
                            <Typography variant="body1">
                                {item.description}
                            </Typography>
                        </Box>

                    </Box>
                ))}
            </Box>

        </Box>







    );
}