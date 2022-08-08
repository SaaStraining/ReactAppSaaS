import axios from "axios";
import React, { useState } from "react";
import IllustRh from "../../assets/illustrations/illustration_rh.png";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
import "../components.css";

function AddCompte() {
  return (
    <div className='block'>
      <div className="bg-second w-4/5 h-56 rounded-2xl flex m-auto mt-8 ">
        <div className="block pt-6 pl-16 pr-8 w-7/12 text-left">
          <h1 className="font-bold mb-3 mt-5 ml-2">Ajout des Comptes</h1>
          <p className="text-sm font-light">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla.
          </p>
        </div>
        <div className="w-5/12">
          <img src={IllustRh} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AddCompte