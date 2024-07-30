"use client"
import { Container, Box, Typography, accordionActionsClasses } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import styles from "./faq.module.css";

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

        <Box className={styles.wrapper}>

            <Box>
                <Typography
                    marginBottom={1}
                    variant="h1">
                    FAQ
                </Typography>
                <Typography
                    marginBottom={2}
                    variant="h2">
                    Tire todas as suas dúvidas sobre nosso processo de produção!
                </Typography>
                <Typography
                    marginBottom={2}
                    variant="body1">
                    Lorem ipsum dolor sit amet consectetur. <span style={{ color: '#FF590D', fontWeight: '500' }}>Etiam pellentesque </span>
                    gravida eu egestas sed quis donec ipsum eu. in viverra velit.
                </Typography>

                <Box className={styles.accordion_wrap}>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        elevation={0}>
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>Pizza é boa ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu.
                                In viverra velit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box
                        id='box-panel1'
                        width={24}
                        height={24}
                        marginTop={1}
                        component="img"
                        src={'./minus-circle.svg'}
                    />
                </Box>

                <Box className={styles.accordion_wrap}>
                    <Accordion
                        elevation={0}
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Vende pizza?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu.
                                In viverra velit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box
                        id='box-panel2'
                        width={24}
                        height={24}
                        marginTop={1}
                        component="img"
                        src={'./plus-circle.svg'}
                    />
                </Box>


                <Box className={styles.accordion_wrap}>
                    <Accordion
                        elevation={0}
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Tem pizza de calabresa?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu.
                                In viverra velit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box
                        id='box-panel3'
                        width={24}
                        height={24}
                        marginTop={1}
                        component="img"
                        src={'./plus-circle.svg'}
                    />
                </Box>



                <Box className={styles.accordion_wrap}>
                    <Accordion
                        elevation={0}
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <Typography>Tem delivery?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu.
                                In viverra velit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box
                        id='box-panel4'
                        width={24}
                        height={24}
                        marginTop={1}
                        component="img"
                        src={'./plus-circle.svg'}
                    />

                </Box>


                <Box
                    className={styles.accordion_wrap}
                    style={{ borderBottomStyle: 'none' }}>
                    <Accordion
                        elevation={0}
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <Typography>Entrega de bike?</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                        >
                            <Typography
                                variant="body1">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu.
                                In viverra velit.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Box
                        id='box-panel5'
                        width={24}
                        height={24}
                        marginTop={1}
                        component="img"
                        src={'./plus-circle.svg'}
                    />
                </Box>


            </Box>

            <Box
                className={styles.faq_img}
                component="img"
                alt="Logo pizzaria"
                src="./Multipizza.png"
            />
        </Box>


    );
}
