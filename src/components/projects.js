import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


// a component for project portion on aboutme page, used react-mdl cards and icons to design the basic layout
const Project = (props) => {

      return(
        props.project.map((element) => {
          const { title, text, id, src, links1, links2 } = element
          return(
            <div className="projects-grid" key={id}>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${src})`}} >{title}</CardTitle>
                <CardText>
                  {text}
                </CardText>
                <CardActions border className="btn">
                  <a href ={links1} target='_blank'><Button colored>GitHub</Button></a>
                  <a href ={links2} target='_blank'><Button colored>Live Demo</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
          );
        })
      );
      
  }

export default Project;
