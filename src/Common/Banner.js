import React from 'react'
import { Link } from "react-router-dom"
import WhiteGoldNakshi from '../motionsIcons/WhiteGoldNakshi'

// left: 80vw;
export default function Banner() {
  return (
    <div className=' w-[100vw] h-[100%] pb-10   grid-rows-1  mt-[-80px] grid  md:grid-cols-2 bg-[#420251]  bg-no-repeat bg-cover bg-center' >
      <WhiteGoldNakshi top={60} left={80} />
      <WhiteGoldNakshi top={0} left={50} />
      <div className='  mt-20 flex items-center justify-cente' >
        <img className=' w-auto h-100  ' src='https://png.pngtree.com/png-clipart/20231010/original/pngtree-indian-wedding-haldi-mehndi-couple-sitting-on-floral-swing-png-image_13294030.png' />
      </div>
      <div className=' px-3   flex-col flex items-center justify-center text-white'>
        <div>
          <h1 className=' text-[2.5rem] font-bold '>Create website as Digital Card And Increse Bussines 10X time</h1>
          <span className=' text-lg' >Welcome to <span className=' text-orange-500'>WEBCARD</span> , where artistic vision meets digital innovation! As a dedicated platform for marriage card creators, we empower you to showcase your creativity, connect with couples, and elevate the art of wedding invitations</span>
          <Link className="btn-start w-20 mt-6 block text-start  text-white font-bold py-2 px-6 rounded">
            Start
          </Link>

        </div>

      </div>
    </div>


  )
}
{/* <div className='bg-red-600 flex justify-center mt-[-80px]'>
  <div
    className='w-full h-[200vh] bg-no-repeat bg-center bg-cover bg-opacity-50'
    style={{
      backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.mHUvovZxG8HKJKZPF2vUXQHaHa&pid=Api&rs=1&c=1&qlt=95&w=700&h=700')",
    }}
  >
    Banner
  </div>
</div> */}


