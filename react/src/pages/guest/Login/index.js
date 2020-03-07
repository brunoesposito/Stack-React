import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import Input from '../../../global/components/input';
import Api from '../../../global/services/api';

function Login() {
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
            dispatch({ type: 'USER_LOGIN' });
            history.push('/');

        });
    }

    return (
        <div className="form">
            
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                {error && <p className="alert alert-error">{error}</p>}
                <Input type="text" name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

                <div className="button">
                    <button className="btn btn-primary" type="submit">Login</button>
                    <Link className="text-primary" to="/signup">Register</Link>
                </div>
            </Form>

        </div>
    );
}

export default Login;
