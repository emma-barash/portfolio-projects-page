import React from 'react';
import Bounty from '../elements/photos/BountyHunter.png';
import Tasker from '../elements/photos/Tasker.png';
import Satoko from '../elements/photos/Satoko.png';
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
            <ProjectTitle><a href="http://emmabarash-zencss.surge.sh/" target="_blank">Task'r</a></ProjectTitle>
            <img className="bountyImg" src={ Tasker } alt="Tasker Screen Shot"/>
            <a href="https://github.com/emma-barash/taskr-group" target="_blank"><button class="gbutton">github repo</button></a>
            <a href="https://taskr-saurus.herokuapp.com/" target="_blank"><button class="lbutton">link</button></a>
            <ProjectAttributes>MongoDB, React, Express, JavaScript, Node.js:
Dynamic Full Stack Website</ProjectAttributes> 
            <p>"Task'r" is a web-application designed to help children learn executive functioning by providing task-boards to help organize chores. Within my team of three, I am responsible for front-end API requests, a modest portion of the design, and page-organization. This was my first collaborative experience, which included daily stand-ups, a collaborative GIT repository, and responsibility for pulling one's own weight. In my opionion, this project was successful: we all learned to use Styled-Components in React and the application's completion has left us excited for future group projects!
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
            <ProjectTitle><a href="http://businesspage-staticsite.surge.sh/" target="_blank">Satoko Ceramics</a></ProjectTitle>
            <img className="bountyImg" src={ Satoko } alt="Satoko Ceramics Screen Shot"/>
            <a href="https://github.com/emma-barash/new-satoko-site" target="_blank"><button class="gbutton">github repo</button></a>
            <ProjectAttributes>JavaScript, CSS, React, MongoDB, Express, Bcrypt:<br/>Online Gallery</ProjectAttributes>
            <p>This web page represents a unique user interface, the front end of which is constructed with React and the back end with MongoDB.  This page demonstrates an ability to utilize styling transformations, RESTful API requests from the front end, and user authenrication!  
            </p>
            </div>
        </ProjectsContainer>
    );
};

export default Projects;