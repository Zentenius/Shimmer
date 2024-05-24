import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex items-center justify-center'>
        <div className='bg-[url("https://ballwash.com/cdn/shop/files/BSY_Web_Graduation_05082024_2100x1100_desktop.jpg?v=1715698627")] bg-cover bg-no-repeat w-[95vw] min-h-screen rounded-sm border flex flex-col justify-center border-black '>
                <div className='ml-14 space-y-8'>
                <h1 className='text-white text-6xl font-bold mb-20'>GRAD NIGHT IS ALMOST HERE.</h1>
                <h3 className='text-white text-5xl font-bold'>SAVE AN EXTRA 20% ON SELECT PRODUCTS!</h3>
                <p className='text-white text-5xl'>USE CODE: GRADUATION</p>
                <div className='space-x-6'>
                    <button className=' capitalize bg-[#f8f4ec] rounded-md px-16 py-3'>Shop now</button>
                    <button className=' capitalize bg-[#f8f4ec] rounded-md px-16 py-3'>Shop Best Sellers</button>

                </div>
                </div>
        </div>
    </div>
  )
}

export default Hero