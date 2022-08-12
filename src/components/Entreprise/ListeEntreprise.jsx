import React from 'react'
import "../components.css";
import { Link } from "react-router-dom";
import Preview from '../../assets/icons/preview.png'
import { useState, useEffect } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";

const ListeEntreprise = () => {

  const [searchTerm,setSearchTerm] = useState("");
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

  return (
    <div className='ListeEntreprise block pt-7 w-4/5 m-auto'>
      <div className="w-4/5 font-semibold ">
        <h1 className="-ml-72 underline decoration-primary text-lg">Liste des Entreprises :</h1>
      </div>
      <div className='ListeEts block'>
        <div className='mt-11 flex'>
          <div className=' w-3/4  relative'>
            <div className='cent_in '><label className='h-12 cent_lab'>Rechercher par Nom : &nbsp;</label></div>
            <input type="text" className='inp_search bg-inputsec border-none rounded-md h-11 w-72' 
              placeholder='Nom/Raison social ...'
              name="search-entreprise"
              onChange={(e)=>{setSearchTerm(e.target.value)}} 
            />
          </div>
          <div className='w-1/4'>
            <Link to='/'>
              <button className='bg-blueprim border-none text-white w-full h-full rounded-lg'>Ajouter une Entreprise &nbsp;+</button>
            </Link>
          </div>
          
        </div><br />
        <div className='tab_ents h-96 mt-7 rounded-2xl'>
          <table className='w-full rounded-2xl inset-x-0 top-0'>
            <thead className='rounded-2xl'>
              <tr>
                <td>Id</td>
                <td>ICE</td>
                <td>Nom</td>
                <td>Email</td>
                <td>Tel Fix</td>
                <td>Ville</td>
                <td>Preview</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody className=''>
              {
                entreprise.filter(val=>{
                if(searchTerm === ''){
                    return val;
                }else if(
                    val.nom.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                    return val;
                }
                }).map(ets => {
                    return (
                        <tr>
                            <td>E00{ets.id}</td>
                        </tr>
                    )
                })
              }
           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListeEntreprise