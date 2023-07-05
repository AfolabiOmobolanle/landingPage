import React from 'react'
import logo from '../assets/images-removebg-preview 2.png'

const Nav = () => {
  return (
    <div className='w-full pt-8 h-10 flex flex-row justify-around items-center'>
      <img src={logo} alt="" />
        <ul className='flex flex-row gap-5 text-sm font-semibold'>
            <li className=' text-white'>Home</li>
            <li className=' text-white'>About</li>
            <li className=' text-white'>Contact</li>
            <li className=' text-white'>Testimonial</li>
            <li className=' text-white'>Pricing</li>
        </ul>
        <button className='w-36 h-10 bg-[#ff5a05] font-bold text-[1rem] rounded-md text-white'>Get started</button>
    </div>
  )
}

export default Nav