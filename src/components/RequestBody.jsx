import React from 'react'
import Picture from '../assets'

const RequestBody = () => {
    return (
        <>
            <div className='block md:flex justify-center gap-16'>
                <div className=' flex justify-center'>
                    <span className='relative'>
                        <img className='h-[300px] w-[500px]' src={Picture.request1} alt="" />
                        <img className='h-[100px] w-auto absolute z-10 -top-10 -left-16 image' src={Picture.request2} alt="" />
                        <button className="bg-[#70C217] text-white px-7 py-2 rounded-full font-normal absolute z-10 right-44 top-[93%] md:-right-44 md:top-4 ">Corso Dattilografia</button>
                    </span>
                </div>
                <div className='mt-4 grid place-items-center'>
                    <ul className='list-disc space-y-4 mt-6'>
                        <li>Typology Course Typing</li>
                        <li>Registrations ALWAYS OPEN</li>
                        <li>Full online delivery mode</li>
                        <li>Score1point in the ranking</li>
                    </ul>
                </div>
            </div>
            <div className=' grid md:flex justify-center gap-4 my-6 text-lg md:text-xs'>
                <button className='rounded-full bg-[#7F67AA] text-white px-7 py-3 w-full' >Request Info</button>
                <button className="rounded-full border-[#239CAC] border px-7 py-3 text-[#239CAC] w-full">Buy Now</button>
            </div>
        </>
    )
}

export default RequestBody