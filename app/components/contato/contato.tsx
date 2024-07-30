"use client"
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Icon } from '@mui/material';
import styles from "./contato.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FormControl } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


export default function Contato() {


    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [nomeError, setNomeError] = useState(false)
    const [mensagemError, setMensagemError] = useState(false)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()

        setEmailError(false)
        setNomeError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (nome == '') {
            setNomeError(true)
        }
        if (mensagem == '') {
            setMensagemError(true)
        }

        if (email && nome && mensagem) {
            alert(
                `Nome: ${nome}, E-mail: ${email}, Mensagem: ${mensagem}`
            )
        }
    }



    return (
        <Box id='contato'>
            <Box className={styles.duvida}>
                <Typography variant='h3'>
                    Ainda tem dúvidas sobre Pizza?
                </Typography>
                <Typography variant='body1'>
                    Entre em contato direto com nossos atendentes.
                </Typography>
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
                <Typography variant="h2" align='center' marginY={2}>
                    Fale com a nossa equipe especializada <br></br>
                    e adquira nossos serviços
                </Typography>
                <Typography variant="body1" align='center'>
                    Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla imperdiet <br></br>
                    malesuada ullamcorper facilisis.
                </Typography>
                <Box >
                    <form className={styles.form_items} autoComplete="off" onSubmit={handleSubmit}>


                        <TextField
                            label="Primeiro nome"
                            onChange={e => setNome(e.target.value)}
                            type='text'
                            value={nome}
                            error={nomeError}
                        />
                        <TextField
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            value={email}
                            error={emailError}
                        />
                        <TextField
                            label="Mensagem"
                            onChange={e => setMensagem(e.target.value)}
                            type="text"
                            value={mensagem}
                            error={mensagemError}
                        />
                        <Button
                            variant='contained'
                            type="submit"
                            color='primary'
                        >
                            Enviar mensagem
                        </Button>

                    </form>
                </Box>
            </Box>

        </Box>

    );
}


/*
                <FormControl>
                    <FormLabel>Enter Name</FormLabel>
                    <TextField></TextField>
                    <FormLabel>Email</FormLabel>
                    <TextField></TextField>
                    <FormLabel>Mensagem</FormLabel>
                    <TextField></TextField>
                    <Button>Enviar mensagem</Button>
                </FormControl>
*/