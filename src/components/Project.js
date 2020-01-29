import React from 'react';

function Project(props) {
    return (
        <div style={{
            border: "1px white solid"
        }}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Project;