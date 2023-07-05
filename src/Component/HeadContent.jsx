import React from 'react'
import tablet from '../assets/tablet.png'
const HeadContent = () => {
  return (
    <div className='w-screen h-[100%] flex flex-row justify-around align-middle items-center'>
       <div className='w-[20%] h-[70%] bg-transparent flex flex-col items-start justify-evenly'>
            <p className='text-white text-xl font-semibold'>INSPIRATION TECHNOLOGY.</p>
            <h1 className='font-bold text-6xl text-white'>Runs faster.</h1>
           <h2 className='text-5xl text-white'>Cost less and</h2>
           <h2  className='text-5xl text-white pb-5'>Never breaks.</h2>

         <div className='w-full h-[1px] bg-white'>
         </div>
            <h6 className='text-white font-medium text-[12px] text-left pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis minus hic quae tenetur fugit natus omnis quisquam, ut modi, non laboriosam impedit quibusdam quos placeat fuga amet asperiores nulla?</h6>



            <div className='w-full flex flex-row gap-6 mt-5'>
             <button className='w-36 h-10 bg-[#ff5a05] rounded-md font-bold text-[1rem] text-white'>Get started</button>
              <button className='w-24 h-10 bg-transparent border-[#0000] font-bold text-[1rem] text-white'>Free trial</button>
            </div>
          </div>
          <img className='w-[35%]' src={tablet} alt="" />
    </div>
  )
}

export default HeadContent