import React from 'react';
import Bounty from '../elements/photos/BountyHunter.png';
import Tasker from '../elements/photos/Tasker.png';
import Satoko from '../elements/photos/Satoko.png';
import Toggle from '../shared/Toggle.js';
import { 
    ProjectsContainer, 
    ProjectList, 
    ProjectTitle, 
    ProjectAttributes,
    PEButton
} from '../elements/index';

const Projects = () => {
    return (
        <Toggle render={({ on, toggler }) => 
                !on ? 
                <ProjectsContainer>
            <div>
                <PEButton onClick={ toggler }>see experience</PEButton><br/>
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
            <p>This web page represents a unique user interface, the front end of which is constructed with React and the back end with MongoDB.  This page demonstrates an ability to utilize styling transformations, RESTful API requests from the front end, and user authenication!  
            </p>
            </div>
        </ProjectsContainer>
            :
            <ProjectsContainer>
                <PEButton onClick={ toggler }>see projects</PEButton><br/>
                <ProjectList>Experience</ProjectList><br/>
                <ProjectTitle>Qualifications</ProjectTitle>
                <ProjectAttributes>Certification in Full Stack Web Development - V School, 2019</ProjectAttributes>
                <p>I have mentored, demonstrated leadership, take direction and constructive critisism well, and have been a successful team player. My 
                    approach to any form of collaborative process includes ensuring everyone's opinion is carefully acknowledged.  
                </p>
                <ProjectList>V School, Salt Lake City, UT — Teaching Assistant</ProjectList>
                <p>
                • Helping students become familiar with Vanilla JavaScript, HTML, and CSS,  navigate debugging their own and each others’ code.<br/>
                • Lead groups in learning GIT collaboration, using the command line and the GitHub web application.<br/>
                • Instructing techniques for using and integrating Mongoose, MongoDB, and Express in full stack React projects, including user authentication.<br/>
                • Worked with teachers to help diversify explanations for difficult React and JavaScript concepts. <br/>
                </p><br/>
                <ProjectTitle>B Street Shoes, Costa Mesa, CA — Product Manager</ProjectTitle>
                <p>
                • Task Delegation to a Team of Five Artists. <br/> 
                • Working in the backend of Shopify, regularly updating the website.<br/> 
                • Customer Service: spoke with over 150 customers daily.<br/> 
                • Web-Search Optimization Updates & Implementation.<br/> 
                • Outreach to other companies for promotional collaborations. - Setting up events at TOMs; successfully initiated a contract with Jimmy Choo.<br/> 
                • Handled Last-Minute Product Changes: discussed changes with customers while making sure the product is delivered on schedule.<br/> 

                </p>
            </ProjectsContainer>
            }/>
    );
};

export default Projects;