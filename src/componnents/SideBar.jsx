import React from 'react'
import { useState } from 'react';
// import { Dropdown,Flowbite, DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Flowbite } from 'flowbite-react';
import { DarkThemeToggle } from 'flowbite-react';
function SideBar() {
  const [toggle,setToggle] = useState(false);
  const Show = (e) =>{
    e.preventDefault();
    setToggle(!toggle);
  }
  return (

    <aside className='w-1/5 side-nav h-screen overflow-y-auto pb-4  rounded dark:bg-gray-800 '>
       <div className='w-full m-0'>
          <div className='side-header  w-full grid place-items-center h-12 text-center  m-0 mb-4'>
            <h3 className='m-0 text-white font-extrabold'>LOGO</h3>
          </div>
          <div className='w-100  h-auto mb-11 text-white'>
              <div className="flex justify-center text-white">
                  <h3 className=''>Ressources Humain </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1  text-white ml-3 " onClick={Show}/>
              </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
                <div>
                    { 
                      toggle ? 
                        <div className='flex  border justify-center w-100 h-auto mb-11 text-white'>
                            ha zebi 
                        </div> : null
                  }
                </div>
            </div>
            <div className='w-100  h-auto mb-11 text-white'>
              <div className="flex justify-center text-white">
                  <h3 className=''>Ressources Materiels </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1  text-white ml-3 " onClick={Show}/>
              </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
                <div>
                    { 
                      toggle ? 
                        <div className='flex  border justify-center w-100 h-auto mb-11 text-white'>
                            ha zebi 
                        </div> : null
                  }
                </div>
            </div>
            <div className='w-100  h-auto mb-11 text-white'>
              <div className="flex justify-center text-white">
                  <h3 className=''>Gestion des Produits </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1  text-white ml-3 " onClick={Show}/>
              </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
                <div>
                    { 
                      toggle ? 
                        <div className='flex  border justify-center w-100 h-auto mb-11 text-white'>
                            ha zebi 
                        </div> : null
                  }
                </div>
            </div>
       
           
       </div>

     




    </aside>
  )
}

export default SideBar;