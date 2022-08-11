import React from "react";
const StepperControl = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* Back button */}
      <button
        className="bg-white text-slate-400 uppercase 
        py-2 px-4 rounded-xl font-semibold cursor-pointer
         border-2 border-slate-300 hover:bg-slate-700 hover:text-primary transition duration-200  ease-in-out"
      >
        Retour
      </button>
      {/* Next button */}
      <button
        className="bg-primary text-white uppercase 
        py-2 px-4 rounded-xl font-semibold 
        cursor-pointer  hover:bg-white hover:text-blue-600
        transition duration-200  ease-in-out"
      >
        Suivant
      </button>
    </div>
  );
};
export default StepperControl;
