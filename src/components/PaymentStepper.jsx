import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Personal information', 'Address information', 'Submit'];

function PaymentStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function GetStep(stepNumber) {
    switch (stepNumber) {
      case 1:
        return (
          <div className="my-5">
            <label>First name</label>
            <input type="text" placeholder="Enter your first name here" className="form-control mb-3" />
            <label>Last name</label>
            <input type="text" placeholder="Enter your last name here" className="form-control mb-3" />
            <label>Email adress</label>
            <input type="email" placeholder="Enter your email adress here" className="form-control mb-3" />
            <label>Phone number</label>
            <input type="tel" placeholder="Enter your phone number here" className="form-control" />
          </div>
        )
      case 2:
        return (
          <div className="my-5">
            <label>Enter your adress</label>
            <textarea className="form-control" rows="10"></textarea>
          </div>
        )
      case 3:
        return (
          <div className="my-5">
            <h4>Click the submit button to confirm your order.</h4>
          </div>
        )
    }
  }

  return (
    <Box className="border rounded py-4 px-2" sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div className="my-5">
              <h4>Your transactions are completed, you can fill in your card information and complete your shopping.</h4>
            </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>{GetStep(activeStep + 1)}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default PaymentStepper;
