import styled from 'styled-components/native';

export const BoxDashboard = styled.View`
    padding: 20px;
`;

export const BoxTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const BoxPlates = styled.View`
    border-radius: 10px;
    margin-bottom: 30px;
    border: 1px solid #d5d5d5;
    overflow: hidden;
`;

export const ImgPlates = styled.Image`
    width: 100%;
    height: 300px;
    max-width: 100%;
    margin: auto;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #9b9b9b;
    padding: 20px;
`;

export const Logout = styled.TouchableOpacity`
`;

export const LogoutText = styled.Text`
    color: #467ab2;
    font-weight: bold;
`;
