import React from "react";
import "../components.css";
import EntrepriseForm from "../EntrepriseForm";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";

function CalculDevis() {
  const steps = ["Information Entreprise", "Produits", "Services"];
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <EntrepriseForm />;
    }
  };

  return (
    <div className="mx-auto w-4/5">
      <Stepper />
      <StepperControl />
    </div>
  );
}

export default CalculDevis;
