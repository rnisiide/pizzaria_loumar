"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from "./contato.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Send from '../../../public/send-01.svg'


export default function Contato() {


    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [nomeError, setNomeError] = useState(false)
    const [mensagemError, setMensagemError] = useState(false)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        if (email == '' || nome == '' || mensagem == '') {
            alert('Favor preencher todos os campos')
        }


        if (email && nome && mensagem) {
            alert(
                `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
            )
        }
    }

    return (
        <Box id='contato' className={styles.contato}>
            <Box className={styles.duvida}>
                <Box className={styles.perguntas}>
                    <Typography variant='h3'>
                        Ainda tem dúvidas sobre Pizza?
                    </Typography>
                    <Typography variant='body2'>
                        Entre em contato direto com nossos atendentes.
                    </Typography>
                </Box>
                <Button
                    className={styles.btn}
                    startIcon={<WhatsAppIcon />}
                    variant="contained"
                    color="warning"
                    target="_blank"
                    href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
                > Entrar em contato
                </Button>

            </Box>

            <Box className={styles.form_wrapper}>
                <Typography variant="h1" align='center'>
                    Entre em contato
                </Typography>
                <Box className={styles.textDesktop}>
                    <Typography variant="h2" align='center' className={styles.gilroyText}>
                        Fale com a nossa equipe especializada
                        e adquira nossos serviços
                    </Typography>
                    <Typography variant="body1" align='center'>
                        Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla imperdiet
                        malesuada ullamcorper facilisis.
                    </Typography>
                </Box>
                <Box className={styles.textMobile}>
                    <Typography variant="h2" align='center' className={styles.gilroyText}>
                        Se desejar alguma informação ou efetuar uma compra com nossos atendentes
                    </Typography>
                    <Typography variant="body1" align='center'>
                        Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla imperdiet
                        malesuada ullamcorper facilisis.
                    </Typography>
                </Box>
                <Box>
                    <form className={styles.form_items} autoComplete="off" onSubmit={handleSubmit}>
                        <Box className={styles.form_text}>
                            <Typography
                                variant='body1'
                                fontWeight={500}
                                paddingBottom={'6px'}
                            >
                                Primeiro Nome
                            </Typography>
                            <TextField
                                fullWidth={true}
                                onChange={e => setNome(e.target.value)}
                                type='text'
                                value={nome}
                                InputProps={{
                                    style: {
                                        borderRadius: "8px",
                                        height: '44px',
                                        borderColor: '#D0D5DD'
                                    }
                                }}
                            />
                        </Box>

                        <Box className={styles.form_text}>
                            <Typography
                                variant='body1'
                                fontWeight={500}
                                paddingBottom={'6px'}>
                                Email
                            </Typography>
                            <TextField
                                fullWidth={true}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                value={email}
                                InputProps={{
                                    style: {
                                        borderRadius: "8px",
                                        height: '44px',
                                        borderColor: '#D0D5DD'
                                    }
                                }}
                            />
                        </Box>

                        <Box className={styles.form_textarea}>
                            <Typography
                                variant='body1'
                                fontWeight={500}
                                paddingBottom={'6px'}>
                                Mensagem
                            </Typography>
                            <TextField
                                onChange={e => setMensagem(e.target.value)}
                                type="textarea"
                                value={mensagem}
                                error={mensagemError}
                                fullWidth={true}
                                InputProps={{
                                    style: {
                                        borderRadius: "8px",
                                        height: '160px',
                                    }
                                }}
                            />
                        </Box>

                        <Button
                            startIcon={<Send />}
                            className={styles.form_btn}
                            variant='contained'
                            type="submit"
                        >
                            Enviar mensagem
                        </Button>

                    </form>
                </Box>
            </Box>

        </Box>

    );
}


