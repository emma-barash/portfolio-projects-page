import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;  
    text-align: center;
    grid-area: project;
    flex-direction: column;
    border-bottom: 1px solid navajowhite;
    border-top: 1px solid navajowhite;
    padding: 60px;
    border-radius: 3% 40%;
    @media(max-width: 545px){
     text-align: center;
     margin-left: 0;
    }
`;