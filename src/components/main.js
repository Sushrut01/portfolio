import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import src1 from '../images/react.png';
import src2 from '../images/nodejs.png';
import src3 from '../images/mongo.jpg';

// this is the main portion of the page where all the states and routing along with passing of props are handled
class Main extends Component{
  state = {
    name : 'Sushrut Kansakar',
    about : 'Hey there, I am available on the platforms listed over here. Feel free to contact me in case you need, links to access these platforms are given in landingpage. Thank You!!!',
    description : [
      {
        id : 1,
        name : 'Sushrut Kansakar',
        title : 'Web Developer',
        about : 'To become a successful expert in the field of Computer Science and Engineering by optimizing my technical as well as non-technical knowledge as well as skills to ensure personal and professional growth and to contribute to the prosperity of the organization',
        address : 'Sursand, Sitamarhi, Bihar-843331',
        phone : '+918003951093',
        email : 'sushrutkansakat1@gmail.com',
        linkedin : 'https://www.linkedin.com/in/sushrutkansakar/',
        github : 'https://github.com/Sushrut01?tab=repositories'
      }
    ],
    education : [
      {id : 1, startYear : 2017, endYear : 2021, schoolName : 'Lovely Professional University', schoolDescription : 'Bachelor of technology in Computer Science and Engineering'},
      {id : 2, startYear : 2014, endYear : 2016, schoolName : 'Gyankunja Awasiya Higher Secondary Boarding School', schoolDescription : 'Higher Secondary Education Board (XII)'},
      {id : 3, startYear : 2002, endYear : 2014, schoolName : 'Arniko Academy English Boarding School', schoolDescription : 'School Leaving Certificate (X)'}
    ],
    skills : [
      {id : 1, type : 'HTML', progress : 90},
      {id : 2, type : 'CSS', progress : 85},
      {id : 3, type : 'JavaScript', progress : 75},
      {id : 4, type : 'ReactJs', progress : 75},
      {id : 5, type : 'NodeJs', progress : 70},
      {id : 6, type : 'MongoDB', progress : 65}
    ],
    hobbies : [
      {id : 1, value : 'Playing Cricket'},
      {id : 2, value : 'Travelling'},
      {id : 3, value : 'Reading Books'},
      {id : 4, value : 'Listening Music'},
      {id : 5, value : 'Watching Movies'},
    ],
    core : [
      {id : 1, item : 'Full Stack Web Development'},
      {id : 2, item : 'Data Structures and Algorithm'}
    ],
    contactlist : [
      {id : 1, icon : 'fa fa-phone-square', type : '+918003951093'},
      {id : 2, icon : 'fa fa-linkedin-square', type : 'Sushrut Kansakar'},
      {id : 3, icon : 'fa fa-envelope', type : 'sushrutkansakar1@gmail.com'},
      {id : 4, icon : 'fa fa-skype', type : '+9779816258500'}
    ],
    project : [
      {id : 1, title : 'Online Butcher Shop', text : 'You can explore, filter and order meat items of your wish', src : `${src1}`, links1 : 'https://github.com/Sushrut01/htdmeatshop', links2 : 'https://htd-meat-shop.netlify.app/'},
      {id : 2, title : 'Comment Website', text : 'You can login, view and reply to the comments just like you do in Social Media Sites', src : `${src2}`, links1 : 'https://github.com/Sushrut01/comments-webApp', links2 : 'https://comment-webapp.netlify.app/'},
      {id : 3, title : 'To-Do-List', text : 'You can add, delete and update the data in your list', src : `${src3}`, links1 : 'https://github.com/Sushrut01/Assignment_CipherSchools/tree/master/todolist', links2 : 'https://nifty-lamport-33a4b9.netlify.app/'},
    ]
  };
  render(){
    return(
    <div>
      <Switch>
        <Route exact path="/" render={()=><LandingPage />} />
        <Route path="/aboutme" render={()=><AboutMe project = {this.state.project}/>} />
        <Route path="/contact" render={()=><Contact name = {this.state.name}
                                                    about = {this.state.about}
                                                    contactlist = {this.state.contactlist}/>} />
        <Route path="/resume" render={()=><Resume description = {this.state.description}
                                                  education = {this.state.education}
                                                  skills = {this.state.skills}
                                                  hobbies = {this.state.hobbies}
                                                  core = {this.state.core}/>} />
      </Switch>
  </div>
  );
  }
}

export default Main;
