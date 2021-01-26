import React from 'react';
import {useForm} from 'react-hook-form';

import Field from '../Field';
import Form from '../Form';
import Button from '../Button';



const FormNew = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field.Text label="Nome" name="name" type="text" register={register} />
            <Field.Text label="Email" name="email" type="email" register={register} />

            <Button>Enviarr</Button>
        </Form>
    )
};

export default FormNew;