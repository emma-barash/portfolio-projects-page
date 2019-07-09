import styled from 'styled-components';
import ages from './ages.jpg'

export const BackPicture = styled.div`
    background: linear-gradient(rgba(77, 77, 74, 0.5), rgba(77, 77, 74, 0.5)), url(${ages});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media(min-width: 1434px){
        height: 100vh;
    }
    @media(max-width: 740px){
        background-size: contain;
        height: 100vh;

    }
`;