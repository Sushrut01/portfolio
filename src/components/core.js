import React from 'react';


// this is for the core strengths section of resume
const Core = (props) => {
    return(
        props.core.map((element)=> {
            const { id, item } = element
            return(
                <div key={id}>
                    <li style={{margin : '2em', fontSize : '15px'}}>{item}</li>
                </div>
            );
        })
    );
}

export default Core;