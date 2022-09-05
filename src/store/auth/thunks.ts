import { Dispatch } from '@reduxjs/toolkit';
import { logout, login } from './'

import { LoginForm } from '../../interfaces/AuthInterfaces';
import { checkingCredentials } from './';
import { SingInWithGoogle } from '../../firebase/providers';


export const checkingAuthentication = ( { email, password }: LoginForm ) => {
    return async ( dispatch: Dispatch ) => {
        dispatch( checkingCredentials() )
    }
}

export const startGoogleSingIn = () => {
    return async ( dispatch: Dispatch ) => {
        dispatch( checkingCredentials() )
        const result = await SingInWithGoogle()

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) )
        

        dispatch( login( result as any) )
    }
}