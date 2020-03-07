import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const Container = styled.View`
    padding: 20px;
    align-items: center;
`;

export const BoxLink = styled(Link)`
    padding: 0;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px 15px;
    background: #467ab2;
    border-color: #3f6d9f;
    margin-right: 10px;
`;

export const BoxLinkText = styled.Text`
    font-size: 16px;
    color: #fff;
`;
