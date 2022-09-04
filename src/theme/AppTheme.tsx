
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { theme } from '.';

export const AppTheme = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
