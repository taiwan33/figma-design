import React from 'react'
import Picture from '../assets'

const RequestBody = () => {
    return (
        <>
            <div className='block md:flex justify-center gap-16 pt-8'>
                <div className=' flex justify-center'>
                    <span className='relative'>
                        <img className='h-[300px] w-[500px] relative z-20' src={Picture.request1} alt="" />
                        <img className='h-[100px] w-auto absolute z-20 -top-10 -left-16 image' src={Picture.request2} alt="" />
                        <img src={Picture.dot} className=" hidden md:flex h-72 z-10 absolute rotate-90 -left-1 -top-12" alt="" />
                        <img src={Picture.dot} className=" hidden md:flex h-72 absolute right-32 -top-20" alt="" />
                        <img src={Picture.dot} className="hidden md:flex h-[366px] absolute -right-72 -top-2" alt="" />

                        <button className="bg-[#70C217] text-white px-7 py-2 rounded-full font-normal absolute z-30 right-44 top-[93%] md:-right-44 md:top-4 ">Corso Dattilografia</button>
                    </span>
                </div>
                <div className='mt-4 grid place-items-center '>
                    <ul className=' text-sm list-disc space-y-4 bg-white z-20 pt-0 md:pt-10 pb-0 md:pb-10 mt-8 -ml-4'>
                        <li>Typology Course Typing</li>
                        <li>Registrations ALWAYS OPEN</li>
                        <li>Full online delivery mode</li>
                        <li>Score1point in the ranking</li>
                    </ul>
                </div>
            </div>
            <div className=' flex-col flex md:flex-row justify-center gap-4 my-6 text-lg md:text-xs mx-8'>
                <button className='rounded-full bg-[#7F67AA] text-white px-7 py-3 w-full md:w-[15%]' >Request Info</button>
                <button className="rounded-full border-[#239CAC] border px-7 py-3 text-[#239CAC] w-full md:w-[15%]">Buy Now</button>
            </div>
        </>
    )
}

export default RequestBody