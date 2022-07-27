import React from 'react'
// import { Dropdown,Flowbite, DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faAngleDown } from '@fortawesome/free-solid-svg-icons';
function SideBar() {

  return (

    <aside className='w-64 side-nav h-screen overflow-y-auto py-4 px-3 rounded dark:bg-gray-800 '>
       <div className='w-full m-0'>
          <div className='side-header w-full grid place-items-center h-10 text-center  m-0 mb-4'>
            <h3 className='m-0'>LOGO</h3>
          </div>
          <div className='flex justify-center w-100 text-black  h-auto mb-11 text-white'>
                <h3 className='border'>Ressources Humain </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1 border text-blue-500 ml-3 "/>
                {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
             
            </div>
            <div className='flex justify-center w-100 text-black  h-auto mb-11 text-white'>
            <h3 className='border'>Ressources Materials </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1 border text-blue-500 ml-3 "/>
              
            </div>
            <div className='flex justify-center w-100 text-black  h-auto mb-11 text-white'>
            <h3 className='border'>Gestion des Produits </h3>
                <FontAwesomeIcon icon={faAngleDown}  className=" mt-1 border text-blue-500 ml-3 "/>
       
            </div> 
       </div>

     




    </aside>
  )
}

export default SideBar;