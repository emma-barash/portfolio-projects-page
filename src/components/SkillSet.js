import React from 'react';
import PDF from '../elements/EmmaBarashResumé.png';

import { SkillContainer, Skills, Phone } from '../elements/index'

const SkillSet = () => {
    return (
        <SkillContainer>
            <Skills>Contact Me:</Skills>
            <Phone><a href="https://github.com/emma-barash">G I T</a></Phone>
            <Phone><a download="Emma Barash Resumé" href={PDF}>resumé</a></Phone>
            <Phone><a href="https://www.linkedin.com/in/emma-barash-861333181/">LinkedIn</a></Phone>
            <Phone>1-(707)-590-1903</Phone>
            <Phone>emma.barash.dev@gmail.com</Phone>
        </SkillContainer>
    );
};

export default SkillSet;