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

      <div className="m-auto w-4/6 mt-11 ">
      <div className="tab_compte content-center w-full text-left text-xs mt-7 ">
            <table className="w-full justify-center ">
              <tr className="h-10 ">
                <td>
                  <p className="w-24">Nom :</p>
                </td>
                <td>
                  <input
                    type="text"
                    className="bg-input w-52 h-10 border-none rounded-lg"
                    name="nom"
                  />
                  <br />
                </td>
                <td>
                  <p className="w-24 ml-10">Prenom :</p>
                </td>
                <td>
                  <input
                    type="text"
                    className="bg-input w-52 h-10 border-none rounded-lg"
                    name="prenom"
                  />
                  <br />
                </td>
              </tr>
              <tr className="h-10 mt-24">
                <td>Mail :</td>
                <td colspan="3">
                  <input
                    type="text"
                    className="bg-input w-11/12 h-10 border-none rounded-lg"
                    name="mail"
                  />
                  <br />
                </td>
              </tr>
              <tr className="h-10 mt-24">
                <td>Mot de passe :</td>
                <td colspan="3">
                  <input
                    type="text"
                    className="bg-input w-11/12 h-10 border-none rounded-lg"
                    name="mail"
                  />
                  <br />
                </td>
              </tr>
              <tr className="h-10 mt-24">
                <td>Role :</td>
                <td colspan="1" className="border ">
                  <select className="sel_role bg-input w-11/12 border-none pl-3 cursor-pointer rounded-lg content-center align-middle "  >
                    <option value="ADMIN" className="ml-10"></option>
                    <option value="ADMIN">Admin</option>
                    <option value="EDITOR">Editeur</option>
                    <option value="VISITOR">Visiteur</option>
                  </select>
                </td>
              </tr>
              
            </table>
          </div>

      </div>
    </div>
  )
}

export default AddCompte