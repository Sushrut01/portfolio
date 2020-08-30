import React from 'react';


// this is a component for area of interest section in resume
const Hobbies = (props) => {
    return(
        props.hobbies.map((element) => {
            const { id, value } = element
            return(
                <div key={id}>
                    <li style={{margin : '2em', fontSize : '15px'}}>{value}</li>
                </div>
            );
        })
    );
}

export default Hobbies;