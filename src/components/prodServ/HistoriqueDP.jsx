import React from 'react'
import "../components.css";
import { Link } from "react-router-dom";
import Preview from '../../assets/icons/preview.png'
import Update from '../../assets/icons/update.png'
import Delete from '../../assets/icons/delete.png'
import { useState, useEffect } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function HistoriqueDP() {
  const [searchTerm,setSearchTerm] = useState("");
  const [devis, setDevis] = useState([]);
  // useEffect(() => {
  //   axiosInstance.get('/devis/get')
  //     .then(res => {
  //         setDevis(res.data);
  //         console.log(res.data);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     });
  // }, []);

  return (
    <div className='ListeEntreprise block pt-7 w-4/5 m-auto'>
      <div className="w-4/5 font-semibold ">
        <h1 className="-ml-72 underline decoration-primary text-lg">Liste des Devis Par Projet :</h1>
      </div>
      <div className='ListeEts block'>
        <div className='mt-11 flex'>
          <div className=' w-3/4  relative '>
            <div className='cent_in '><label className='h-12 text-xs font-extrabold '>Rechercher par Nom Entreprise : &nbsp;</label></div>
            <input type="text" className='inp_search bg-inputsec border-none rounded-md h-11 w-72 ' 
              placeholder='Nom Entreprise ...'
              name="search-devis"
              onChange={(e)=>{setSearchTerm(e.target.value)}} 
            />
          </div>
          <div className='w-1/4'>
            <Link to='/'>
              <button className='bg-blueprim border-none text-white w-full h-full rounded-lg'>Ajouter Devis &nbsp;+</button>
            </Link>
          </div>
          
        </div><br />
        <div className='tab_ents h-96 mt-7 rounded-2xl overflow-x-hidden scrollbar-hide '>
          <table className='w-full rounded-2xl inset-x-0 top-0 h-96 border-b align-middle'>
            <thead className='rounded-2xl sticky top-0'>
              <tr>
                <td>Id</td>
                <td>Nº devis</td>
                <td>Entreprise</td>
                <td>Date Devis</td>
                <td>Nombre Prod</td>
                <td>Nombre Serv</td>
                <td>Total Prix</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody className='h-96  align-middle	'>
              {
                devis.filter(val=>{
                if(searchTerm === ''){
                    return val;
                }else if(
                    val.nom.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                    return val;
                }
                }).map(devs => {
                  return (
                    <tr className='border-b text-sm'>
                      <td className=''>E00{devs.id}</td>
                      {/*  too change from db */}
                      {/* <td>{devs.ice}</td> 
                      <td>{devs.nom}</td>
                      <td>{devs.mail}</td>
                      <td>{devs.fix}</td>
                      <td>{devs.ville}</td> */}
                      <td className='align-middle	'><button><img src={Preview} width="35px" className='' alt="" /></button></td>
                      <td className='align-middle	 text-white'>
                        <div className='flex'>
                        <button className='update w-24  h-8 text-center bg-update p-0 align-middle items-center justify-center content-center text-xs flex mr-3 ml-3 rounded-lg'>Modifier &nbsp;&nbsp; <img src={Update} alt="" /></button>
                        <button 
                          className='delete bg-delete w-8 h-8 p-0 align-middle items-center justify-center content-center text-center rounded-lg flex'
                          onClick={(e) => {
                            axiosInstance.
                                delete('/devis/delete/' + devs.id).
                                then(res => {
                                  setDevis(devis.filter(d => d.id !== devs.id))
                                  toast("Entreprise supprimé avec succes", {
                                    type: toast.TYPE.WARNING,
                                    position: toast.POSITION.BOTTOM_CENTER
                                  }
                                  );
                                })
                          }}
                        >
                            <img src={Delete} width="16px" alt=""/>
                        </button>
                        </div>
                      </td>
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

export default HistoriqueDP;
