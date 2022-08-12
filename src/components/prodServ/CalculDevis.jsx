import React, {useState} from "react";
import "../components.css";
import EntrepriseForm from "../DevisForms/EntrepriseForm";
import ProduitForm from "../DevisForms/ProduitForm";
import ServiceForm from "../DevisForms/ServiceForm";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";

function CalculDevis() {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = ["Information Entreprise", "Produits", "Services"];
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <EntrepriseForm/>;
      case 2:
        return <ProduitForm/>;
      case 3: 
        return <ServiceForm/>
    }
  };

  return (
    <div className="mx-auto w-4/5">
      <Stepper steps = {steps}  currentStep = {currentStep}/>
      <StepperControl />
    </div>
  );
}

export default CalculDevis;
