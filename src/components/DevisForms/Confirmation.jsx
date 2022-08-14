import React from "react";

const Confirmation = ({ prevStep, nextStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <form action="">
        <p>displaying data here for confirmation</p>
        <button onClick={Previous}>Retour</button>
        <button onClick={Continue}>Suivant</button>
      </form>
    </div>
  );
};

export default Confirmation;
