import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';

function Project(props) {
    return (
        <div style={{
            border: "1px white solid",
            borderRadius: "1%",
            paddingLeft: "1rem",
            paddingRight: "1rem"
        }}>
            <Typography variant="h5" style={{marginTop: "1rem", marginBottom: "0"}}>{props.title}</Typography>

            <hr style={{marginBottom: "1rem", marginTop: "0.5rem"}} />

            <img src={props.image} alt={props.title} style={{width: "100%"}} />

            <hr style={{marginBottom: "0.5rem", marginTop: "1rem"}} />

            <Typography variant="body2" style={{marginBottom: "0.5rem", marginTop: "0.5rem"}}>{props.desc}</Typography>

            <hr style={{marginBottom: "1rem", marginTop: "0.5rem"}} />

            <Container
                maxWidth="xl"
                style={{
                    marginBottom: "1rem"
                }}
            >
                <Button
                    variant="outlined"
                    size="medium"
                    href={props.github}
                    style={{
                        position: "relative",
                        margin: "0 1rem",
                        left: "30%",
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF"
                    }}>
                        GitHub
                </Button>
                <Button
                    variant="outlined"
                    size="medium"
                    href={props.demo}
                    style={{
                        position: "relative",
                        margin: "0 1rem",
                        left: "25%",
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF"
                    }}>
                        Demo
                </Button>
            </Container>
        </div>
    );
}

export default Project;