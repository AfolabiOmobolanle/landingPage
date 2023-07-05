import React from 'react'
import Nav from './Nav'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div className='w-screen h-[70Vh] bg-indigo-300'>
        <Nav/>
        <HeadContent/>
    </div>
  )
}

export default Header