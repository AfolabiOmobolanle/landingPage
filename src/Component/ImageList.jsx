import React from 'react'
import fedex from '../assets/image 25.png'
import google from '../assets/google-1-removebg-preview 1.png'
import ola from '../assets/image 27.png'
import micro from '../assets/new-Microsoft-logo-removebg-preview 1.png'
import amazon from '../assets/539f3ffbecad044276726c01-removebg-preview 1.png'
import fed from '../assets/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import walmart from '../assets/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'

const imageList = () => {
  return (
    <div className='w-full h-24 flex  flex-col gap-10 mt-14 '>
        <div className=' flex flex-row justify-around align-middle items-center'>
            <img src={fedex} alt=""  className=''/>
            <img src={google} alt="" />
            <img src={ola} alt="" />
            <img src={micro} alt="" />

        </div>
        <div className='flex flex-row justify-around align-middle items-center'>
            <img src={amazon} alt="" />
            <img src={fed} alt="" />
            <img src={walmart} alt="" />
        </div>
        
        <div>

        </div>
    </div>
  )
}

export default imageList