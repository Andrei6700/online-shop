import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form";

export const useFormData = () => {
    const schema = yup.object().shape({
        name: yup.string().matches(/^[^\d]+$/, 'Invalid name')
            .max(64, 'Maxim 64 characters').required('Invalid form'),
        email: yup.string()
            .email('Invalid email').required('Invalid form'),
        tara: yup.string().matches(/^[^\d]+$/, 'Invalid name')
            .max(64, 'Maxim 64 characters').required('Invalid form'),
        telefon: yup.string().matches(/^\d+$/, 'Invalid Telefon')
            .max(64, 'Maxim 20 characters').required('Invalid form'),
        bmilitara: yup.string().matches(/^[a-zA-Z0-9\s\.,'"\-]+$/, 'Invalid ')
            .max(64, 'Maxim 64 characters').required('Invalid form'),
        adresa: yup.string().matches(/^[a-zA-Z0-9\s\.,'"\-]+$/, 'Invalid ')
            .max(64, 'Maxim 64 characters').required('Invalid form'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return { register, handleSubmit, errors };
}