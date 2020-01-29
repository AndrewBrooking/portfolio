import React from 'react';
import { MobileStepper, Button } from '@material-ui/core/';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/';
import Project from'./Project.js';

const test = [
    {
        title: "Test Title 1",
        desc: "Testing. Please ignore. 1"
    },
    {
        title: "Test Title 2",
        desc: "Testing. Please ignore. 2"
    },
    {
        title: "Test Title 3",
        desc: "Testing. Please ignore. 3"
    },
    {
        title: "Test Title 4",
        desc: "Testing. Please ignore. 4"
    },
    {
        title: "Test Title 5",
        desc: "Testing. Please ignore. 5"
    },
    {
        title: "Test Title 6",
        desc: "Testing. Please ignore. 6"
    }
];

function Stepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = test.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <div>
            <Project {...test[activeStep]} />
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