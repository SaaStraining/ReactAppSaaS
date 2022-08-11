import React from "react";
import "../components.css";
import IllustDevis from "../../assets/illustrations/illustration_devis.png";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
function CalculDevis() {
  return (
    <div className=" block w-full mt-36 ">
      {/* Div decoration */}
      <div className="bg-lightgreen w-4/5 h-56 rounded-2xl flex m-auto mt-8 ">
        <div className="block pt-6 pl-16 pr-8 w-7/12 text-left">
          <h1 className="font-bold mb-3 mt-5 ml-2">Calcul Devis</h1>
          <p className="text-sm font-light">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla.
          </p>
        </div>
        <div className="w-5/12">
          <img src={IllustDevis} alt="" className="" />
        </div>
      </div>
      {/* form div */}
      <form action="" className=" w-2/3 mx-auto mt-12 ">
        <div className="text-sm text-justify text-gray-500 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            omnis rerum nulla soluta, odit autem, sequi dolor voluptate magnam
            ipsa quibusdam porro sed! Saepe iusto officiis libero sed asperiores
            aperiam.
          </p>
        </div>
        <div className="flex justify-end mt-14 w-full">
          <label htmlFor="" className="block h-14  pt-3.5 w-1/5">
            Entreprise :
          </label>
          <select
            name=""
            id=""
            className="pl-5 w-3/5 bg-input border-none h-14 rounded-bl-full rounded-tl-full"
          >
            <option value="">Entreprise 1</option>
            <option value="">Entreprise 2</option>
            <option value="">Entreprise 3</option>
          </select>
          <button className="btn-suivant  bg-primary text-white text-center py-3.5 px-5 h-14 items-center rounded-tr-full rounded-br-full w-1/5 inline-flex">
            Suivant
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-3"
            >
              <path
                d="M2.71201e-06 13.75L1.25 15L8.75 7.5L1.25 -6.55671e-07L2.37429e-06 1.25L6.25 7.5L2.71201e-06 13.75Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CalculDevis;
