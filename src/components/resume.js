import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Avatar from '../images/profile.jpg';
import Description from './description';
import Hobbies from './hobbies';


// the parent component for resume page, all the remaining child components are imported where required
const Resume = (props) => {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div className="Avatar">
              <img
                src={Avatar}
                alt="avatar"
                style={{height: '200px' , borderRadius: '50%'}}
                 />
            </div>

            {/* for description section in left hand side of resume page */}
            <div>
              <Description description = {props.description} core = {props.core}/>
            </div>
          </Cell>
          {/* for education section  */}
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education education = {props.education} />
            <hr style={{borderTop: '3px solid #e22947'}} />

            {/* for skills section */}
            <h2>Skills</h2>

            <Skills skills = {props.skills} />
              <hr style={{borderTop: '3px solid #e22947'}} />


            {/* for area of interest section */}
            <h2>Area of Interest</h2>
            <Hobbies hobbies={props.hobbies} />
          </Cell>
        </Grid>
      </div>
    )
  }

export default Resume;
