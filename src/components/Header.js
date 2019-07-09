import React from 'react';
import { HeaderItem, StyledHeader, WebDev, FrontEnd, BackEnd, AbilityList, AbilityListTwo } from '../elements/index'

const Header = () => {
    return (
        <HeaderItem>
            <StyledHeader style={{borderBottom: '1px solid navajowhite'}}>Emma Barash</StyledHeader>
            <WebDev>Web Developer</WebDev>
            <FrontEnd>Front End:</FrontEnd>
            <AbilityList>HTML, JavaScript, CSS, React, Vue</AbilityList><br/>
            <BackEnd>Back End:</BackEnd>
            <AbilityListTwo>MongoDB, Node.JS, Express</AbilityListTwo>
        </HeaderItem>
    );
};

export default Header;