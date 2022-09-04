import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title='Iniciar Sesión'>
            <form>
                <Grid container>
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
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb:2, mt: 1 }} >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant='contained' fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant='contained' fullWidth>
                                <Google  />
                                <Typography sx={{ ml:1 }} >Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='flex-end'  >
                        <Link component={ RouterLink } to='/auth/register' color= 'inherit'>
                            Crear nueva cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
