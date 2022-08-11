import axios from "axios";
import React, { useState } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
import "../components.css";
const AjoutEntreprise = () => {

  const [data, setData] = useState({
    nom: "",
    mail: "",
    ice: "",
    adresse: "",
    cp: "",
    ville: "",
    fix: "",
    portable: "",
    site: "",
  });

  const handleDataChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const addEntr = (e) => {
    e.preventDefault();
    axiosInstance.post("/entreprise/add", data).catch((e) => {
      console.log(e);
      console.log("back error")
    });
    console.log(data);
  };

  return (
    <div className=' block pt-7'>
      <div className="w-4/5 font-semibold ">
        <h1 className="-ml-72 underline decoration-primary text-lg"> Ajouter une Entreprise :</h1>
      </div>
      <div className="AjoutEntreprise m-auto w-4/6 mt-11 ">
      <form action="" onSubmit={addEntr}>
        <div className="tab_compte content-center w-full text-left text-xs mt-7 ">
          <table className="w-full justify-center ">
            <tr className="h-10 mt-24">
              <td>Nom/Raison sociale : <span className="text-red-700 text-lg"> &nbsp; *</span></td>
              <td colspan="3">
                <input
                  type="text"
                  className="bg-input w-11/12 h-10 border-none rounded-lg"
                  name="nom"
                  required="required"
                  onChange={handleDataChange}
                  value={data.nom}
                />
                <br />
              </td>
            </tr>
            <tr className="h-10 mt-24">
              <td>Mail :</td>
              <td colspan="3">
                <input
                  type="email"
                  className="bg-input w-11/12 h-10 border-none rounded-lg"
                  name="mail"
                  onChange={handleDataChange}
                  value={data.mail}
                />
                <br />
              </td>
            </tr>
            <tr className="h-10 mt-24">
              <td>ICE :<span className="text-red-700 text-lg"> &nbsp; *</span></td>
              <td colspan="3">
                <input
                  type="text"
                  className="bg-input w-11/12 h-10 border-none rounded-lg"
                  name="ice"
                  required="required"
                  maxlength="13"
                  onChange={handleDataChange}
                  value={data.ice}
                />
                <br />
              </td>
            </tr>
            <tr className="h-10 mt-24">
              <td>Adresse :<span className="text-red-700 text-lg"> &nbsp; *</span></td>
              <td colspan="3">
                <input
                  type="text"
                  className="bg-input w-11/12 h-10 border-none rounded-lg"
                  name="adresse"
                  required="required"
                  onChange={handleDataChange}
                  value={data.adresse}
                />
                <br />
              </td>
            </tr>
            <tr className="h-10 ">
              <td>
                <p className="w-24">Code Postal :</p>
              </td>
              <td>
                <input
                  type="text"
                  className="bg-input w-52 h-10 border-none rounded-lg"
                  name="cp"
                  maxLength="10"
                  onChange={handleDataChange}
                  value={data.cp}
                />
                <br />
              </td>
              <td>
                <p className="w-24 ml-0">Ville :<span className="text-red-700 text-lg"> &nbsp; *</span></p>
              </td>
              <td>
                <input
                  type="text"
                  className="bg-input w-52 h-10 border-none rounded-lg"
                  name="ville"
                  required="required"
                  onChange={handleDataChange}
                  value={data.ville}
                />
                <br />
              </td>
            </tr>
            <tr >
              <td>
                <p className="w-24 ml-0">Tél Fix :<span className="text-red-700 text-lg"> &nbsp; *</span></p>
              </td>
              <td>
                <input
                  type="text"
                  className="bg-input w-52 h-10 border-none rounded-lg"
                  name="fix"
                  required="required"
                  onChange={handleDataChange}
                  value={data.fix}
                />
                <br />
              </td>
              <td>
                <p className="w-24 ml-0">Portable :</p>
              </td>
              <td>
                <input
                  type="text"
                  className="bg-input w-52 h-10 border-none rounded-lg"
                  name="portable"
                  onChange={handleDataChange}
                  value={data.portable}
                />
                <br />
              </td>
            </tr>
            <tr className="h-10 mt-24">
              <td>Site internet :</td>
              <td colspan="3">
                <input
                  type="text"
                  className="bg-input w-11/12 h-10 border-none rounded-lg"
                  name="site"
                  onChange={handleDataChange}
                  value={data.site}
                />
                <br />
              </td>
            </tr>
            
            
          </table>
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-44 h-11 rounded-lg text-xs mt-7 float-right mr-14"
        >
          Ajouter
        </button>
      </form>

      </div>
    </div>
  )
}

export default AjoutEntreprise