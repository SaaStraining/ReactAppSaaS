import React, { Component } from "react";
import AddIcon from "../../assets/icons/addicon.png";
import deleteIcon from "../../assets/icons/deleteicon.png";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
import { ToastContainer, toast } from 'react-toastify';
import { PDFDownloadLink } from "@react-pdf/renderer";
import DevisDoc from './DevisDoc'
import { PDFViewer } from "@react-pdf/renderer";

const ServiceForm = ({nextStep, prevStep, handleChange, values}) => {

  const [libelle, setLibelle] = useState("");
  const [nombre, setNombre] = useState("");
  const [unite, setUnite] = useState("");
  const [prix_unite, setPrixUnite] = useState("");
  const [prix_total_unite, setPrixTotalUnite] = useState("");
  const [marge, setMarge] = useState("");
  const [prix_marge, setPrixMarge] = useState("");
  const [prix_total_unite_marge, setPrixTotalUniteMarge] = useState("");
  const [id_devis, setIdDevis] = useState("");

  const Previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  const Next = (e) =>{
    nextStep()
  }

  const addService = (e) => {
    e.preventDefault();
    console.log("marge"+marge)
    setPrixTotalUnite(prix_unite*nombre)
    var ptu = prix_unite*nombre
    var marge_u = prix_unite*marge/100
    var ptum = ptu + (marge_u * nombre)
    var ptumarge = (prix_unite+(prix_unite*marge/100)) * nombre
    var iddvs = localStorage.getItem("id_devis")
    console.log("ptu :  "+ptu)
    console.log("marge_u :  "+marge_u)
    console.log("ptum :  "+ptum)
    setPrixMarge(prix_unite*marge/100)
    setPrixTotalUniteMarge(prix_total_unite+(prix_marge*nombre))
    setIdDevis(localStorage.getItem("id_devis"))
    console.log("prix_total_unite :")
    console.log(prix_total_unite)
    axiosInstance.post(
      '/service/add',
      {
        libelle,
        nombre,
        unite,
        prix_unite,
        "prix_total_unite" : ptu,
        marge,
        "prix_marge" : marge_u,
        "prix_total_unite_marge" : ptum,
        "id_devis": iddvs,
      }
    ).then(res => {
        toast("Produit bien ajouté", {
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.BOTTOM_CENTER
        });
    })
  }

  return (
    <div className="w-full overflow-auto ">
    <div className="w-5/6 mx-auto  mt-4 mb-7 ">
      <form action="" onSubmit={addService} className="flex mx-auto justify-around">
        <div className="w-56 mr-1 ">
          <label htmlFor="" className="block text-md font-light mb-4 float-left  ">
            Libelle:
          </label>
          <input
            name="libelle"
            type="text"
            className=" w-full h-10 rounded-md border-gray-300"
            value={libelle} onChange={(e) => setLibelle(e.target.value)}
          />
        </div>
        <div className="w-32 mr-1">
          <label htmlFor="" className="block text-md font-light mb-4 float-left">
            Nombre:
          </label>
          <input
            type="number"
            className="w-full h-10  rounded-md border-gray-300 "
            name="nombre"
            value={nombre} onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="w-24 mr-1">
          <label htmlFor="" className="block text-md font-light mb-4 float-left">
            Unite:
          </label>
          <select
            id=""
            className="w-full h-10 rounded-md border-gray-300"
            name="unite"
            value={unite} onChange={(e) => setUnite(e.target.value)}
          >
            <option value="kg" className="  text-center mr-2">Kg</option>
            <option value="Cm" className="  text-center mr-2">Cm</option>
            <option value="unite" className=" text-center mr-2">Unite</option>
            <option value="m" className=" text-center mr-2">m</option>
            
          </select>
        </div>
        <div className="w-44 mr-1">
          <label htmlFor="" className="block text-md font-light mb-4 float-left">
            Prix Unitaire:
          </label>
          <input
            type="number"
            className="w-full h-10 rounded-md border-gray-300"
            name="prix_unite"
            value={prix_unite} onChange={(e) => setPrixUnite(e.target.value)}
          />
        </div>
        <div className="w-48 mr-1">
          <label htmlFor="" className="block text-md font-light mb-4 float-left">
            Marge des Produits:
          </label>
          <input
            type="number"
            className="w-full h-10 rounded-md border-gray-300"
            name="marge"
            value={marge} onChange={(e) => setMarge(e.target.value)}
          />
        </div>
        <div className="mr-1">
          <button type="submit"  className="  mt-11 ">
            <img src={AddIcon} alt="" className="" />
          </button>
        </div>
      </form>
    </div>
    <div className=" leading-10 w-5/6 mx-auto h-80 mt-5  overflow-x-hidden   ">
      <table className=" w-full rounded-2xl inset-x-0 top-0 h-96 border-b align-middle">
        <thead className=" bg-white sticky top-0">
        <tr>
          <th>id</th>
          <th>Libelle</th>
          <th>Nombre</th>
          <th>Unite</th>
          <th>prix Unité</th>
          <th>prix Total/unite</th>
          <th>Marge</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody className="h-80 align-middle">
          <tr>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td><button ><img src={deleteIcon} alt="" /></button></td>
          </tr>
          <tr>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td>ahah</td>
            <td><button ><img src={deleteIcon} alt="" /></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className=" w-5/6 border flex flex-col  items-start justify-between  mt-10 mb- mx-auto ">
      <p className=" block text-sm mb-2 float-left">Total Ht services (prévus): <span className="ml-4">{ 90454 + 12443497}</span> </p>
      <p className="block text-sm float-left ">Total des marges (prévus): <span className="ml-4">{200999 + 123838}</span> </p>
    </div>
    <br />
    <div className="w-5/6 mx-auto float-right">
      <button className="w-36 rounded-md px-3 py-2 bg-white text-gray-700" onClick={Previous}>Retour</button>
      <button className="w-36 rounded-md px-3 py-2 bg-primary text-white " onClick={Next}>Suivant</button>
    </div>
    <PDFDownloadLink document={<DevisDoc />} fileName='Devis'>
      {({loading}) => loading ? (<button>Loading devis file</button>):(<button>download</button>)}
    </PDFDownloadLink>
    <PDFViewer>
      <DevisDoc />
    </PDFViewer>
    
  </div>
  )
}

export default ServiceForm
