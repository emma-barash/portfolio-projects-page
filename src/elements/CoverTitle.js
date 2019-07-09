import styled from 'styled-components';

export const CoverTitle = styled.h1`
    text-align: left;
    font-size: 130px;
    margin: 540px auto 0 5px;
    display: inline-block;
    text-shadow: 2px 3px black;
    opacity: 0.98;
    @media(min-width: 1434px){
        position: absolute;
        bottom: 5px;
    };
    @media(max-width: 740px){
        font-size: 50px;
        margin: auto;
    }
`;

export const CoverSubTitle = styled(CoverTitle)`
    font-size: 30px;
    display: inline-block;
    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
    @media(min-width: 1434px){
        position: absolute;
        bottom: 55px;
        right: 350px;
    };
    @media(max-width: 740px){
        font-size: 40px;
        margin-top: 500px;
    }
`;

// export const LinkTitle = styled(CoverTitle)`
//     display: inline;
//     font-size: 20px;
//     top: 20px;
//     @media(min-width: 1440px){
//         display: none;
//     };
//     @media(max-width: 740px){
//         font-size: 20px;
//     }
// `;