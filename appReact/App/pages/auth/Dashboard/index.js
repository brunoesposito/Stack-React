import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';

import { 
    Title,
    BoxPlates, 
    BoxDashboard,
    ImgPlates,
    Description,
    BoxTitle,
    Logout,
    LogoutText
} from './styles';

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
                <Title>Pratos</Title>
                <Logout onPress={() => SetLogout()}>
                    <LogoutText>Sair</LogoutText>
                </Logout>
            </BoxTitle>
            {Plates.map((plate, index) => (
                <BoxPlates key={index}>
                    <ImgPlates source={{ uri: plate.image }} />
                    <Description>{plate.description}</Description>
                </BoxPlates>
            ))}

        </BoxDashboard>
    );
}

export default Dashboard;
