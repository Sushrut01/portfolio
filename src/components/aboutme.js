import React from 'react';
import src1 from '../images/BoardInfinity.PNG';
import src2 from '../images/TeachTech.jpg';
import Project from './projects';

const About = (props) => {
  return(

    // headings and texts
    <div>
      <div className="header">
        <h1>Certificates</h1>
      </div>
      <div className="pictures">
        <img src={src1} alt="source1" />
        <img src={src2} alt="source2" />
      </div>
      <div className="project-header">
        <h1>Projects</h1>
      </div>

      {/* importing project component */}
      <div className="project">
        <Project project = {props.project}/>
      </div>
    </div>
  );
}

export default About;
