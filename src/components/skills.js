import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


// a component for skills section in resume page
const Skills = (props) => {
    return(
      props.skills.map((element) => {
        const { id, type, progress } = element
        return(
          <Grid key={id}>
            <Cell col={12}>
              <div style={{display: 'flex'}}>{type} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={progress} /> </div>
            </Cell>
          </Grid>
        );
      })
    );
  }

export default Skills;
