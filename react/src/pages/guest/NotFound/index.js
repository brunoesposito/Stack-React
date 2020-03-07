import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="NotFound">
            <h1 className="text-center">Página não encontrada</h1>
            <div className="text-center">
                <Link to="/" class="btn btn-primary">Voltar</Link>
            </div>
        </div>
    );
}

export default NotFound;
