"use client"
import { Box, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import styles from "./faq.module.css";

const faqs = [
    {
        title: "Pizza é boa ?",
        description: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',

    },
    {
        title: "Vende pizza?",
        description: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',

    },
    {
        title: "Tem pizza de calabresa?",
        description: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',

    },
    {
        title: "Tem delivery?",
        description: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',

    },
    {
        title: "Entrega de bike?",
        description: 'Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.',

    },
];

export default function Faq() {


    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            const button1 = document.getElementById('box-panel1');
            button1?.setAttribute('src', './plus-circle.svg')
            const button2 = document.getElementById('box-panel2');
            button2?.setAttribute('src', './plus-circle.svg')
            const button3 = document.getElementById('box-panel3');
            button3?.setAttribute('src', './plus-circle.svg')
            const button4 = document.getElementById('box-panel4');
            button4?.setAttribute('src', './plus-circle.svg');
            const button5 = document.getElementById('box-panel5');
            button5?.setAttribute('src', './plus-circle.svg')

            setExpanded(newExpanded ? panel : false);
            const minusButton = document.getElementById(`box-${panel}`);
            if (newExpanded) {
                minusButton?.setAttribute('src', './minus-circle.svg')
            } else {
                minusButton?.setAttribute('src', './plus-circle.svg')
            }
        };


    return (

        <Box id="faq" className={styles.wrapper}>

            <Box>
                <Typography
                    marginBottom={1}
                    variant="h1">
                    FAQ
                </Typography>
                <Typography className={styles.gilroyText}
                    marginBottom={2}
                    variant="h2">
                    Tire todas as suas dúvidas sobre nosso processo de produção!
                </Typography>
                <Typography
                    marginBottom={3}
                    variant="body1"
                    fontSize={'16px'}>
                    Lorem ipsum dolor sit amet consectetur. <span style={{ color: '#FF590D', fontWeight: '500' }}>Etiam pellentesque </span>
                    gravida eu egestas sed quis donec ipsum eu. In viverra velit.
                </Typography>

                {faqs.map((faq, index) => {
                    const panel = index + 1;
                    return (
                        <Box className={styles.accordion_wrap}
                            style={{ borderBottomColor: '#d3d3d3' }}>
                            <Accordion
                                elevation={0}
                                onChange={handleChange(`panel${panel}`)}>
                                <AccordionSummary
                                    aria-controls={`panel${panel}-content`}
                                    id={`panel${panel}-header`}>
                                    <Typography
                                        sx={{
                                            fontFamily: "Inter",
                                            color: '#1D2939',
                                            fontWeight: '500',
                                            fontSize: '18px',
                                        }}>{faq.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">
                                        {faq.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Box
                                id={`box-panel${panel}`}
                                width={24}
                                height={24}
                                marginTop={1}
                                component="img"
                                src={'./plus-circle.svg'}
                            />
                        </Box>
                    )
                }
                )

                }
            </Box>

            <Box
                className={styles.faq_img}
                component="img"
                alt="Logo pizzaria"
                src="./Multipizza.png"
            />
        </Box >

    );
}
