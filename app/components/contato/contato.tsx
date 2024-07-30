"use client"
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

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
        <Container id='contato'>

            <Box>
                <Typography>
                    Ainda tem dúvidas sobre Pizza?
                </Typography>
                <Typography>
                    Entre em contato direto com nossos atendentes.
                </Typography>
                <Button target="_blank" href="https://wa.me/5545988041417?text=Oi%20mensagem%0A">Entre em contato</Button>
            </Box>

            <Box>
                <Typography
                    variant="h1"
                >
                    Entre em contato
                </Typography>
                <Typography
                    variant="h2"
                >
                    Fale com a nossa equipe especializada e adquira nossos serviços
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. in viverra velit.
                </Typography>
            </Box>

            <Box>
                <form autoComplete="off" onSubmit={handleSubmit}>

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
        </Container>
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