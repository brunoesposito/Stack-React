import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../../global/components/input';
import Api from '../../../global/services/api';

function Signup() {
    const [error, setError] = useState('');
    const history = useHistory();

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
                setError('Usuário ou senha diferente do desafio!');
                return reset();
            }

            reset();
            history.push('/login');

        });
    }

    return (
        <div className="form">
            
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                {error && <p className="alert alert-error">{error}</p>}
                <Input type="text" name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

                <div className="button">
                    <button className="btn btn-primary" type="submit">Register</button>
                    <Link className="text-primary" to="/login">Cancel</Link>
                </div>
            </Form>

        </div>
    );
}

export default Signup;
