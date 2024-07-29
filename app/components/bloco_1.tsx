import { Box, Container, Typography } from "@mui/material";

const items = [
    {
        icon: './icon1.png',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
    {
        icon: './icon2.png',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
    {
        icon: './icon3.png',
        title: 'Lorem Ipsum Dolor',
        description:
            'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit',
    },
];

export default function Bloco_1() {
    return (
        <Container
            id='bloco_1'
            sx={{
                display: 'flex',
            }}

        >
            <Box
                component="img"
                sx={{
                    height: 425,
                }}
                alt="Logo pizzaria"
                src="./Pizza_derretendo_desktop.png"
            />
            <Box>
                <Typography>
                    Por que escolher Pizza SVG
                </Typography>
                <Typography>
                    A melhor Pizza com o melhor atendimento da cidade
                </Typography>

                {items.map((item, index) => (
                    <Box key={index}>
                        <Box component="img"
                            src={item.icon}
                        />
                        <Typography>
                            {item.title}
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                    </Box>
                ))}


            </Box>

        </Container>



    );
}