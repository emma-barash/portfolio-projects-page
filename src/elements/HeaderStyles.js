import styled from 'styled-components';

export const HeaderItem = styled.div`
    grid-area: head;
    /* border: solid 1px red; */
    text-align: right;
    padding: auto;
    @media(max-width: 740px){
     text-align: center;
     margin: auto;
     display: flex;
     flex-direction: column;
    }
`;


