import React from 'react';
import { Grid, Cell } from 'react-mdl';


// this is a component for education section in resume
const Education = (props) => {
  return(
    props.education.map((element) => {
      const {id, startYear, endYear, schoolName, schoolDescription} = element
      return(
        <Grid key={id}>
          <Cell col={4}>
            <p>{startYear} - {endYear}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{marginTop:'0px'}}>{schoolName}</h4>
            <p>{schoolDescription}</p>
          </Cell>
        </Grid>
      );
    })
  )
}

export default Education;
