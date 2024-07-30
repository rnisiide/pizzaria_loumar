'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const gilroy = localFont({ src: './fonts/Gilroy/Gilroy-Bold.ttf' })

declare module '@mui/material/styles' {
    interface Theme {
        palette: {
            main: string;
        };
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#0C111D',
        },
        secondary: {
            main: '#FFFFFF',
            dark: '#F2F4F7',
        },
        warning: {
            main: '#25D366',
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        h1: {
            color: '#FF5000',
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: '600',
        },
        h2: {
            fontSize: '32px',
            fontWeight: '400'
        },
        h3: {
            fontFamily: "Inter",
            color: '#101828',
            fontWeight: '600',
            fontSize: '18px',

        },
        subtitle1: {
            fontFamily: "Inter",
            color: '#1D2939',
            fontWeight: '500',
            fontSize: '14px',

        },
        body1: {
            fontFamily: "Inter",
            color: '#344054',
            fontWeight: '400',
            fontSize: '14px',

        },
        body2: {
            fontFamily: "Inter",
            color: '#475467',
            fontWeight: '400',
            fontSize: '16px',

        }


    }
});

export default theme;
