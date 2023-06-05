import React, { useState } from 'react';
import './trackcomponent.css';
import {
  Stepper,
  Step,
  StepLabel,
  makeStyles,
} from "@material-ui/core";
import clsx from 'clsx';
import { Checkmark24Filled } from '@fluentui/react-icons';
import OrderHistoryCompo from '../orderHistoryCompo/orderHistoryCompo';



export default function Trackcomponent() {
  const [activeStep, setActiveStep] = useState(1);

  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#eaeaf0',
      padding: 8,
      borderRadius: '100%'
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
      1: <Checkmark24Filled />,
      2: <Checkmark24Filled />,
      3: <Checkmark24Filled />,
      4: <Checkmark24Filled />,

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
      <div className='textTrackComponent'>
          <h1 className='textTrackTitle'>Track your order</h1>
          <p className='textTrackContent'>Keeping track of your order is important! So here's a real time state update of your purchases</p>
      </div>
                
        
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
      <OrderHistoryCompo activeStep={activeStep}/>
    </div>
  );
}
