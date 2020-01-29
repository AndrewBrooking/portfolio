import React from 'react';
import { MobileStepper, Button } from '@material-ui/core/';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
import Project from'./Project.js';

const data = [
    {
        title: "qWiki",
        desc: "qWiki is a platform that provides a quick and easy way to host your own scalable Wiki. With the Builder Tool, you can easily generate dynamic informative Wikis and publish them for others to read or contribute.",
        image: "https://raw.githubusercontent.com/ragobash/qwiki/AndrewBrooking-patch-1/client/public/images/qwiki.PNG",
        github: "https://github.com/ragobash/qwiki",
        demo: "https://protected-forest-42016.herokuapp.com/"
    },
    {
        title: "PayMyProject",
        desc: "Provide a better platform for makers and content creators with more freedom than Patreon allows.",
        image: "https://raw.githubusercontent.com/AndrewBrooking/Project-2/master/public/pmp.PNG",
        github: "https://github.com/AndrewBrooking/Project-2",
        demo: "https://safe-sands-72263.herokuapp.com/"
    },
    {
        title: "LIRI",
        desc: "A Node.JS command line application similar to SIRI (Speech Interpretation Recognition Interface), LIRI takes a command and performs an action.",
        image: "https://raw.githubusercontent.com/AndrewBrooking/LIRI/master/images/liri.gif",
        github: "https://github.com/AndrewBrooking/LIRI",
        demo: "#"
    },
    {
        title: "Get Out",
        desc: "A date/event planning application to aggregate nearby options for activities.",
        image: "https://raw.githubusercontent.com/AndrewBrooking/Project-1/master/assets/images/get-out.PNG",
        github: "https://github.com/AndrewBrooking/Project-1",
        demo: "https://andrewbrooking.github.io/Project-1"
    },
    {
        title: "Clicky Game",
        desc: "A React based memory game. Don't click the same character twice! How high can you score?",
        image: "https://raw.githubusercontent.com/AndrewBrooking/Clicky-Game-React/master/public/images/clicky-game.PNG",
        github: "https://github.com/AndrewBrooking/Clicky-Game-React",
        demo: "https://andrewbrooking.github.io/Clicky-Game-React/"
    },
    {
        title: "Rock, Paper, Scissors",
        desc: "Multiplayer game with a live chat feature!",
        image: "https://raw.githubusercontent.com/AndrewBrooking/Rock-Paper-Scissors/master/assets/images/RPS.PNG",
        github: "https://github.com/AndrewBrooking/Rock-Paper-Scissors",
        demo: "https://andrewbrooking.github.io/Rock-Paper-Scissors"
    }
];

function Stepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div>
            <Project {...data[activeStep]} />
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                style={{
                    background: "rgba(27, 31, 34, 0)",
                    flexGrow: 1,
                }}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} style={{paddingLeft: "1rem"}}>
                     Next
                    <KeyboardArrowRight />
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{paddingRight: "1rem"}}>
                    <KeyboardArrowLeft />
                    Back 
                </Button>
                }
            />
        </div>
    );
}

export default Stepper;