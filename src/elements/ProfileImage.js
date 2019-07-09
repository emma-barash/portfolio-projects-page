import styled from 'styled-components';

export const ProfileImage = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 100%;
    margin: auto;
    border: 3px solid navajowhite;
    /* box-shadow: 5px 10px 10px navajowhite; */
    opacity: 1;
    @media(max-width: 545px) {
        height: 150px;
        width: 150px;
    }
`;