import React from 'react';
import Core from './core';


// this is for the description of details used in resume
const Description = (props) =>{
    return(
        props.description.map((element) => {
            const {id, name, address, title, about, phone, email, linkedin, github} = element
            return(
                <div key={id}>
                    <h2>{name}</h2>
                    <h4 style={{color: 'grey'}}>{title}</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <p>{about}</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <h5 style={{fontWeight : 'bolder'}}>Address</h5>
                    <p>{address}</p>
                    <h5 style={{fontWeight : 'bolder'}}>Phone</h5>
                    <p>{phone}</p>
                    <h5 style={{fontWeight : 'bolder'}}>Email</h5>
                    <p>{email}</p>
                    <h5 style={{fontWeight : 'bolder'}}>LinkedIn</h5>
                    <a href={linkedin} style={{textDecoration:'none'}}><p>{linkedin}</p></a>
                    <h5 style={{fontWeight : 'bolder'}}>Github</h5>
                    <a href={github} style={{textDecoration:'none'}}><p>{github}</p></a>
                    <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
                    <h5 style={{fontWeight : 'bolder'}}>Area of Interest</h5>
                    <Core core = {props.core}/>
                </div>
            );
        })
    );
}

export default Description;