import React from 'react';
import Header from './Header';
import SkillSet from './SkillSet';
import Experiment from './Experiment';
import ExperienceDetails from './ExperienceDetails';
import Toggle from '../shared/Toggle.js';
import { 
    LayoutContainer,
    LayoutContainer2,
    ToggleButton
} from '../elements/index';

const Experience = () => {
    return (
        <Toggle render={({on, toggler}) => 
        !on ?
            <LayoutContainer>
                    <Experiment />
                    <Header />
                    <SkillSet />
                    <ExperienceDetails />
                    <ToggleButton onClick={ toggler }>∆ color theme</ToggleButton>
            </LayoutContainer>
        :
        <LayoutContainer2>
                    <Experiment />
                    <Header />
                    <SkillSet />
                    <ExperienceDetails />
                    <ToggleButton onClick={ toggler }>∆ dark theme</ToggleButton>
            </LayoutContainer2>
        }/>
    );
};

export default Experience;