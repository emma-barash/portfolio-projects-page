import styled from 'styled-components';

export const ToggleButton = styled.button`
    background-color: transparent;
    font-size: 15px;
    border-radius: 10px 40px;
    padding: 2px;
    margin: auto auto auto 30px;
    width: 65%;
    &:focus{
        outline: none;
    }
    @media(max-width: 740px){
        font-size: 13px;
        padding: 5px;
    }
`;

export const PEButton = styled(ToggleButton)`
    width: 10%;
    left: 0;
    position: absolute;
    border: none;
    &:hover{
        opacity: 0.65;
        cursor: pointer;
    }
`;