import styled from 'styled-components';

export const LayoutContainer = styled.div`
    /* background-image: linear-gradient(to bottom right, #BE8901, #9A2B2E, #00235D); */
    background-image: linear-gradient(to bottom right, black, black, #808080);
    background-size: fill;
    background-blend-mode: hard-light;
    display: grid;
    height: auto;
    width: 100vw;
    /* border: 1px solid red; */
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(12, auto);
    padding: 0;
    margin: 0;
    grid-gap: 5px;
    grid-template-areas:
    'ex ex head head'
    'skills skills skills skills'
    'project project project project'
    'project project project project'
    'project project project project'
    ;
    @media(max-width: 740px){
        grid-template-areas:
    'ex ex ex ex'
    'head head head head'
    'skills skills skills skills'
    'skills skills skills skills'
    'project project project project'
    'project project project project'
    'project project project project'
    ;
    }
`;


export const LayoutContainer2 = styled(LayoutContainer)`
    background-image: linear-gradient(to bottom right,#BE8901, #9A2B2E, #00235D);
`;