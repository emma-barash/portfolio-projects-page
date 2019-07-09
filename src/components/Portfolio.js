import React from 'react';
import Header from './Header';
import SkillSet from './SkillSet';
import Projects from './Projects';
import Experiment from './Experiment';
import Toggle from '../shared/Toggle';
import { LayoutContainer, LayoutContainer2, ToggleButton } from '../elements/index';

const Portfolio = () => {
    return (
        <Toggle render={({on, toggler}) => 
            !on ?
            <LayoutContainer>
                <Experiment />
                <Header />
                <SkillSet />
                <Projects />
                <ToggleButton onClick={toggler}>∆ color theme</ToggleButton>
             </LayoutContainer>
            :
            <LayoutContainer2>
                <Experiment />
                <Header />
                <SkillSet />
                <Projects />
                <ToggleButton onClick={toggler}>∆ dark theme</ToggleButton>
            </LayoutContainer2>
        }/>
    );
};

export default Portfolio;