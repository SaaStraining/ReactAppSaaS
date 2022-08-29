import React from 'react'
import IllustDevis from "../../assets/illustrations/illustration_devis.png";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
const  EntrepriseForm = ({nextStep, handleChange, values})=> {
  const [entreprise, setEntreprise] = useState([]);
  useEffect(() => {
    axiosInstance.get('/entreprise/get')
      .then(res => {
          setEntreprise(res.data);
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      });
  }, []);
  
  const [data, setData] = useState({
    libelle: "",
    num: "",
    date_devis: "",
    id_e: ""
  });

  const handleDataChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const initDevis = (e) => {
    e.preventDefault();
    axiosInstance.post("/devis/add", data).then(
      res => {
        console.log("top")
        console.log(res.data.id_devis)
        console.log("bott")
        localStorage.setItem("id_devis", JSON.stringify(res.data.id_devis));

        nextStep()
      });
     
  };
 
  const changeEntreHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("entreprise", JSON.stringify(e.target.value));
    console.log(localStorage.getItem("entreprise"));
  };

    // const Continue = (e) => {
    //   e.preventDefault();
    //   nextStep();
    // }


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
    <form action="" onSubmit={initDevis} className=" w-2/3 mx-auto mt-12 ">
      <div className="text-sm text-justify text-gray-500 ">
        <p>
         Information Devis
        </p>
      </div>
      <div className="flex justify-end mt-14 w-full">
        
        <input type="text"  className='inline-block pl-5 w-3/5 text-gray-500 focus:outline-none border-r-gray-400 bg-input border-l-0 border-y-0 h-14 rounded-bl-full rounded-tl-full border-r' 
        name='libelle'
        onChange={handleDataChange}
        value={data.libelle}
        placeholder='Libelle'/>
        <input type="number" className='inline-block pl-5 w-3/5 text-gray-500 focus:outline-none border-r-gray-400 bg-input border-y-0 border-l-0  h-14 border-r' 
        name='num'
        onChange={handleDataChange}
        value={data.num}
        placeholder='Numero'  />
        <input type="date"  className='inline-block pl-5 w-3/5 text-gray-500 focus:outline-none border-r-gray-400 bg-input  border-y-0 border-l-0 h-14 border-r' 
        name='date_devis'
        onChange={handleDataChange}
        value={data.date_devis}
        placeholder='h'/>
      
        <select
          name="id_e"
          id=""
          className="pl-5 w-3/5 bg-input border-none h-14 text-gray-400"
          onChange={handleDataChange}
          value={data.id_e}
          placeholder='Entreprise'
        >
        
          {
            entreprise.map( et => {
              return(
                <option value={et.id}>{et.nom}</option>
                )
            })
          }
        </select>
        <button type='submit' className="btn-suivant  bg-primary text-white text-center py-3.5 px-5 h-14 items-center rounded-tr-full rounded-br-full w-1/5 inline-flex">
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
  )
}
export default EntrepriseForm
