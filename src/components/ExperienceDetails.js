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
                <ProjectList>Other Skills</ProjectList>
                <p>
                Git, JSON, Java, Adobe Photoshop, PaySimple, Mentoring, Mongoose
                </p><br/>
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
                <ProjectTitle>Accomplishments in Education</ProjectTitle>
                <p>
                Full Stack JavaScript Web Development Certificate<br/>
                Participant, G2G3 DevOps simulation<br/>
                Secretary, Brandeis Robotics Club<br/>
                Member, Brandeis Automation Lab<br/>
                Member, Brandeis Maker Lab<br/>
                Member, Brandeis Equestrian Club<br/>
                Robotics Club:  Design Engineer; worked with a team of five people to create an underwater robot.<br/>  Nationals: ranked 46 out of 120 at Georgia Tech.<br/>
                </p>
                <ProjectTitle>Volunteering</ProjectTitle>
                <p>
                - V School<br/>
                - Ukiah Trail Group: Participated in construction and maintenance of local trails. <br/> 
                - Ukiah Valley Medical Center: Assisted with inpatient physical therapy and outpatient therapy. Supervised outpatients on the Ukiah Trail Group trails.<br/>
                </p>
            </ProjectsContainer>
    );
};

export default ExperienceDetails;