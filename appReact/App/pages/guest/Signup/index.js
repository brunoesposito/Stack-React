import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-native';

import { Form } from '@unform/mobile';
import Input from '../../../global/components/input';
import Api from '../../../global/services/api';

import { View, Text } from 'react-native';
import {
    BoxForm,
    FormTitle,
    AlertError,
    AlertErrorText,
    BoxButton,
    TextPrimary,
    BtnPrimary,
    BtnPrimaryText
} from '../../../global/style';

function Signup() {
    const formRef = useRef(null);
    const [error, setError] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    async function handleSubmit(data, {reset}) {
        const { username, password } = data;

        if( username === '' || password === '' ){
            setError('Por favor não deixe nenhum campo vazio!');
            return reset();
        }

        Api('http://www.mocky.io/v2/5defab092f0000e7848e0c9e',
            'POST',
            JSON.stringify(data)
        ).then(response => response.json()).then(result => {

            if( username !== result.username || password !== result.password ){
                setError('Login inválido');
                return reset();
            }

            reset();
            history.push('/login');

        });
    }
    
    return (
        <BoxForm>
            <FormTitle>Register</FormTitle>
            <Form ref={formRef} onSubmit={handleSubmit}>
                {error != '' && (
                    <AlertError>
                        <AlertErrorText>{error}</AlertErrorText>
                    </AlertError>
                )}
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

                <BoxButton>
                    <BtnPrimary onPress={() => formRef.current.submitForm()}>
                        <BtnPrimaryText>Register</BtnPrimaryText>
                    </BtnPrimary>
                    <Link to="/login">
                        <TextPrimary>Cancel</TextPrimary>
                    </Link>
                </BoxButton>
            </Form>
        </BoxForm>
    );
}

export default Signup;
