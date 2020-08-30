import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '../images/profile.jpg';
import ContactList from './contactList';


const Contact = (props) =>{
    return(

      // used react-mdl grid and cell for designing particular row and column
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} style={{marginTop : '100px'}}>
            <img
              src={Avatar}
              alt="avatar"
              style={{height: '250px', borderRadius : '50%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>{props.about}</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            {/* importing ContactList component over here */}
            <div className="contact-list">
              <ContactList contactlist = {props.contactlist} />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }

export default Contact;
