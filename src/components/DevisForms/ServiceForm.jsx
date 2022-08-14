import React from "react";

const ServiceForm = ({prevStep, nextStep, handleChange, values}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  }
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  }
  return <div>
    <form action="">
        <input type="text" placeholder="hello 2" />
        <button onClick={Previous}>Retour</button>
        <button onClick={Continue}>Suivant</button>

    </form>
  </div>;
};

export default ServiceForm;
