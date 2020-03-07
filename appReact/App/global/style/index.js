import styled from 'styled-components/native';

export const BoxForm = styled.View`
    padding: 20px;
`;

export const AlertError = styled.View`
    background: #E53A40;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 10px;
`;

export const AlertErrorText = styled.Text`
    color: #fff;
`;

export const BoxButton = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BtnPrimary = styled.TouchableOpacity`
    padding: 0;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px 15px;
    background: #467ab2;
    border-color: #3f6d9f;
    margin-right: 10px;
`;

export const BtnPrimaryText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const TextPrimary = styled.Text`
    color: #467ab2;
`;

export const FormTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const FormLink = styled.TouchableOpacity`
    margin-left: 15px;
`;