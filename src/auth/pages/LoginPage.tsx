import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

import { RootState, checkingAuthentication, startGoogleSingIn } from '../../store';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

    const { email, password, onChange } = useForm({
        email: 'test1@test.com',
        password: '123456'
    })

    const dispatch = useDispatch();
    const { status } = useSelector( (state: RootState) => state.auth ) // Para acceder la información del store
    
    const isAutenticating = useMemo( () => status === 'checking', [status] )

    const onSubmit = ( event: any ) => {
        event.preventDefault();
        dispatch( checkingAuthentication( {email, password} ) as any )
    }
    const onGoogleSignIn = () => {
        dispatch (startGoogleSingIn() as any )
    }
    return (
        <AuthLayout title='Iniciar Sesión'>
            <form autoComplete='off' onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}} >
                        <TextField 
                            label='Correo' 
                            placeholder="correo@gmail.com" 
                            type='email' 
                            fullWidth
                            name = 'email'
                            value={ email }
                            onChange={ onChange }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label='Contraseña' 
                            placeholder="Contraseña" 
                            type='password' 
                            autoComplete='off'
                            fullWidth
                            name = 'password'
                            value={ password }
                            onChange={ onChange }
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb:2, mt: 1 }} >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAutenticating }
                                variant='contained' 
                                fullWidth
                                type='submit'
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAutenticating }
                                variant='contained' 
                                fullWidth
                                onClick = { onGoogleSignIn }
                                >
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
