// src/App.js
import React, { useState } from "react";
import "./App.css";
import NameAnimation from "./components/NameAnimation";
import DairyMilk from "./components/DairyMilk";

function App() {
  const [step, setStep] = useState(1); // Track which step of the surprise we are on

  const handleNextStep = () => {
    setStep(step + 1); // Move to the next step on button click
  };

  return (
    <div className="app">
      {step === 1 && (
        <div className="step-one">
          <h1> Roja!🌹</h1>
          <button onClick={handleNextStep} className="surprise-button">
            Please Open for surprise
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="step-two">
          <NameAnimation name="Roja" />
          <button onClick={handleNextStep} className="next-button">
            Click to Reveal Your surprise
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="step-three">
          <DairyMilk />
        </div>
      )}
    </div>
  );
}

export default App;
