import { linkedin } from 'fontawesome'
import React from 'react'
import facebookIcon from "../../assets/icons/facebook.png"
import instaIcon from "../../assets/icons/instagram.png"
import linkedInIcon from "../../assets/icons/LinkedIn.png"


const UpHeader = () => {
  return (
    <div className='flex justify-between h-14 '>
        <div className='w-4/12 bg-greenelec text-2xl font-extralight text-bluelec flex  gap-8 items-center justify-center  '><p className=' '>06 07 95 90 06</p></div>
        <div className='w-4/12 flex  gap-8 items-center justify-center'> 
            <p className=' scale-90'><a href=""><img src={facebookIcon} alt="" /></a></p>
            <p className=' scale-90'><a href=""><img src={instaIcon} alt="" /></a></p>
            <p className=' scale-90'><a href=""><img src={linkedInIcon} alt="" /></a></p>
            
        </div>
    </div>
  )
}

export default UpHeader