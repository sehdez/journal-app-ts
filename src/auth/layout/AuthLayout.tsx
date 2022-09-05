import { Grid, Typography } from "@mui/material"

interface Props {
    title: string;
    children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ( { title, children }: Props ) => {
    return (

        <Grid
            container
            spacing={ 0 }
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            
            <Grid
                className= 'box-shadow'
                // xs = {11} 
                // sm={ 7 } 
                // md={ 5 }
                sx = {{ backgroundColor:'white', padding:3, borderRadius: 5, maxWidth:500 }}
            >
                <Typography variant='h4' >{ title }</Typography>
                { children }
            </Grid>
        </Grid>
    )
}
