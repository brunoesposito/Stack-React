import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { BoxPlates, BoxDashboard, BoxTitle } from './styles';

function Dashboard() {
    const Plates = useSelector(state => state.dishes);
    const history = useHistory();
    const dispatch = useDispatch();

    function SetLogout() {
        dispatch({ type: 'USER_LOGOUT' });
        history.push('/login');
    }

    return (
        <BoxDashboard>
            
            <BoxTitle>
                <h1>Pratos</h1>
                <button onClick={() => SetLogout()}>Sair</button>
            </BoxTitle>
            {Plates.map((plate, index) => (
                <BoxPlates key={index}>
                    <img src={plate.image} alt="Plates" />
                    <p>{plate.description}</p>
                </BoxPlates>
            ))}

        </BoxDashboard>
    );
}

export default Dashboard;
