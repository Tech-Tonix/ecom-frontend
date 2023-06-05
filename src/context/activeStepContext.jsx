import React, { createContext, useState } from 'react';

const ActiveStepContext = createContext();




export const ActiveStepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  const setActiveStepValue = (step) => {
    setActiveStep(step);
  };

  return (
    <ActiveStepContext.Provider value={{ activeStep, setActiveStep: setActiveStepValue }}>
      {children}
    </ActiveStepContext.Provider>
  );
};

export default ActiveStepContext;