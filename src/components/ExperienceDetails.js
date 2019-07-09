import React from 'react';
import Toggle from '../shared/Toggle.js';
import { Link } from 'react-router-dom';
import { 
    ProjectsContainer, 
    ProjectList, 
    ProjectTitle, 
    ProjectAttributes,
    PEButton,
} from '../elements/index.js';

const ExperienceDetails = () => {
    return (
        <ProjectsContainer>
              <Link to="/"><PEButton>see projects</PEButton></Link><br/>
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
    );
};

export default ExperienceDetails;