import React from 'react';
import { View } from 'react-native';

import {
    FormTitle,
    TextPrimary
} from '../../../global/style';
import { 
    Container,
    BoxLink,
    BoxLinkText
} from './styles';

function NotFound() {
    return (
        <Container>
            <FormTitle>Página não encontrada</FormTitle>
            <BoxLink to="/">
                <BoxLinkText>Voltar</BoxLinkText>
            </BoxLink>
        </Container>
    );
}

export default NotFound;
