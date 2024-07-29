'use client';
import { createTheme } from '@mui/material/styles';

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
            main: '#fefefe',
        },
    },
});

export default theme;