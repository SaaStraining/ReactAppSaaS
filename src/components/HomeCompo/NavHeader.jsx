import React from 'react'

const NavHeader = () => {
  return (
    <div className='grid gap-5 grid-cols-3 h-16 foStd'>
        <div className='flex justify-start pl-28 items-center font-extrabold text-2xl '><p>Logo</p></div>
        <div className='flex px-2 justify-between items-center gap-3 '>
            <div><a href="#">Accueil</a></div>
            <div><a href="#">A propos</a></div>
            <div><a href="#">Services</a></div>
            <div><a href="#">Contact</a></div>
        </div>
        <div className='flex justify-end items-center pr-28'><a href="#"className='text-greenelec' >Réserver</a></div>
    </div>
  )
}

export default NavHeader