import React from 'react';
import Bounty from '../elements/photos/BountyHunter.png';
import { 
    ProjectsContainer, 
    ProjectList, 
    ProjectTitle, 
    LinkIndicator, 
    ProjectAttributes 
} from '../elements/index';

const Projects = () => {
    return (
        <ProjectsContainer>
            <div>
            <ProjectList>Projects</ProjectList><br/>
            <ProjectTitle><a href="http://emmabarash-zencss.surge.sh/" target="_blank">CSS ZEN GARDEN</a></ProjectTitle>
            <ProjectAttributes>HTML, CSS: Static Website.</ProjectAttributes> 
            <p>This project showcases design-replication of an official "CSS Zen Garden" website.
             The objective is to demonstrate a proficient understanding of CSS implementation with the 
             intention of closely replicating another's artistic vision.
            </p>
            </div>
            <div className="centerProject">
            <ProjectTitle><a href="https://bountyhunter-emmabarash.herokuapp.com/" target="_blank">Bounty Hunter</a></ProjectTitle>
            <img className="bountyImg" src={ Bounty } alt="Bounty Hunter Screen Shot"/>
            <a href="https://github.com/emma-barash/bounty-hunter-first-mongodb" target="_blank"><button class="gbutton">github repo</button></a>
            <a href="https://bountyhunter-emmabarash.herokuapp.com/" target="_blank"><button class="lbutton">link</button></a>
            <ProjectAttributes>React, Node.js, JSX, CSS, MongoDB:<br/> Dynamic Full Stack Website</ProjectAttributes>
            <p>"Bounty Hunter" is built with React and utilizes RESTful api requests to a Mongo Database to populate
                the user interface.  
            </p>
            </div>
            <div>
            <ProjectTitle><a href="http://businesspage-staticsite.surge.sh/" target="_blank">Bstreetshoes Static Web Page</a></ProjectTitle>
            <ProjectAttributes>HTML, JavaScript, CSS, React:<br/>Static Website</ProjectAttributes>
            <p>"Bstreetshoes Business Page" represents a unique user interface, constructed with React.  This page demonstrates an ability to utilize fun styling transformations in CSS!  
            </p>
            </div>
        </ProjectsContainer>
    );
};

export default Projects;