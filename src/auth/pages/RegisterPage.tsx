import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Nueva cuenta" >
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}} >
                        <TextField 
                            label='Nombre' 
                            placeholder="Juan Paco" 
                            type='text' 
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}} >
                        <TextField 
                            label='Correo' 
                            placeholder="correo@gmail.com" 
                            type='email' 
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label='Contraseña' 
                            placeholder="Contraseña" 
                            type='password' 
                            autoComplete='off'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label='Confirmar contraseña' 
                            placeholder="Confirmar contraseña" 
                            type='password' 
                            autoComplete='off'
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb:2, mt: 1 }} >
                        <Grid item xs={ 12 }>
                            <Button variant='contained' fullWidth>
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='flex-end' >
                        <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } to='/auth/login' color= 'inherit'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
