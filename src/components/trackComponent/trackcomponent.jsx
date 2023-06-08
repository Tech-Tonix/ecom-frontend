import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Checkmark32Filled } from '@fluentui/react-icons';

import './trackcomponent.css';

export default function Trackcomponent({ orderStatus }) {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (orderStatus === 'P') {
      setActiveStep(1);
    } else if (orderStatus === 'A') {
      setActiveStep(2);
    } else if (orderStatus === 'S') {
      setActiveStep(3);
    } else if (orderStatus === 'D') {
      setActiveStep(4);
    }
  }, [orderStatus]);

  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#eaeaf0',
      padding: 8,
      borderRadius: '100%',
    },
    active: {
      color: '#11111',
    },
    completed: {
      color: 'green',
    },
  }));

  const CustomStepIcon = (props) => {
    const classes = useStyles();
    const { active, completed } = props;

    const stepIcons = {
      1: <Checkmark32Filled />,
      2: <Checkmark32Filled />,
      3: <Checkmark32Filled />,
      4: <Checkmark32Filled />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {stepIcons[String(props.icon)]}
      </div>
    );
  };

  return (
    <div className='TrackerCompoWrapper'>
      <div className='StepperWrapper'>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel StepIconComponent={CustomStepIcon}>Order Placed</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={CustomStepIcon}>Packed</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={CustomStepIcon}>Shipped</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={CustomStepIcon}>Delivered</StepLabel>
          </Step>
        </Stepper>
      </div>
      
    </div>
  );
}
