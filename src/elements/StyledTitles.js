import styled from 'styled-components';

export const StyledHeader = styled.h1`
    font-size: 120px;
    text-align: right;
    margin: 0 25px 5px 0;
    padding: 2px;
    color: navajowhite;
    opacity: 0.8;
    @media(max-width: 740px){
        font-size: 50px;
    }
`;

export const WebDev = styled(StyledHeader)`
    font-size: 35px;
    margin-top: 0;
    @media(max-width: 740px){
        font-size: 30px;
    }
`;
export const FrontEnd = styled(StyledHeader)`
    font-size: 20px;
    text-decoration: underline;
    display: inline;
    @media(max-width: 740px){
        font-size: 20px;
    }
    `;

export const BackEnd = styled(StyledHeader)`
    font-size: 20px;
    text-decoration: underline;
    display: inline;
    margin-right: 35px;
    @media(max-width: 740px){
        font-size: 20px;
    }
    `;

export const AbilityListTwo = styled(StyledHeader)`
    font-size: 20px;
    display: inline;
    margin-right: 115px;
    @media(max-width: 740px){
        font-size: 20px;
    }
    `;

export const AbilityList = styled(StyledHeader)`
    font-size: 20px;
    display: inline;
    @media(max-width: 740px){
        font-size: 20px;
    }
`;

export const Skills = styled(StyledHeader)`
    font-size: 30px;
    text-align: left;
    @media(max-width: 740px){
        font-size: 20px;
    }
`;

export const Phone = styled(StyledHeader)`
    font-size: 20px;
    text-align: left;
    @media(max-width: 740px){
        font-size: 18px;
    }
    /* display: inline; */
`;

export const ProjectList = styled(StyledHeader)`
    font-size: 30px;
    margin: 10px auto auto auto;
    text-align: center;
    @media(max-width: 740px){
        font-size: 25px;
    }
`;
export const ProjectTitle = styled(StyledHeader)`
    font-size: 30px;
    margin: 40px auto 20px auto;
    text-align: center;
    /* margin-top: 40px; */
    @media(max-width: 740px){
        font-size: 25px;
    }
`;

export const ProjectAttributes = styled(StyledHeader)`
    font-size: 25px;
    text-align: center;
    @media(max-width: 740px){
        font-size: 20px;
    }
`;
// export const LinkIndicator = styled(StyledHeader)`
//     font-size: 18px;
//     text-align: center;
//     position: relative;
//     float: right;
//     bottom: 40px;
//     color: green;
//     right: 300px;
//     @media(max-width: 1240px){
//         display: none;
//     }
//     `;


