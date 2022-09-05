import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [ state, setState ] = useState( initState );

    const onChange = ( { target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = target;

        setState({
            ...state,
            [ name ]: value
        });
    }

    const setFormValue = ( form: T ) => {
        setState(form)
    }

    return {
        ...state,
        form: state,
        onChange,
        setFormValue
    }

}


