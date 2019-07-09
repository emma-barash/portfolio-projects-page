import React from 'react';
import { ProfileImage, ExperimentContainer } from '../elements/index'

const Experiment = () => {
    return (
        <ExperimentContainer>
            <ProfileImage src={require("../elements/portImageCopy.jpg")} alt="Profile Image"/>
        </ExperimentContainer>
    );
};

export default Experiment;