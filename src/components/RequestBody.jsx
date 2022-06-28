import React from 'react'
import Picture from '../assets'

const RequestBody = () => {
    return (
        <>
            <div className='flex justify-center gap-16'>
                <div className=' flex justify-center'>
                    <span className='relative'>
                        <img className=' h-[300px] w-[500px]' src={Picture.request1} alt="" />
                        <img className='h-[100px] w-auto absolute z-10 -top-10 -left-16 image' src={Picture.request2} alt="" />
                    </span>
                </div>
                <div className='mt-4 relative'>
                    <buttom className="bg-[#70C217] text-white px-7 py-1 rounded-full font-normal absolute z-10 -left-[84px] top-0">Corso Dattilografia</buttom>
                    <ul className='list-disc space-y-4 mt-20'>
                        <li>Typology Course Typing</li>
                        <li>Registrations ALWAYS OPEN</li>
                        <li>Full online delivery mode</li>
                        <li>Score1point in the ranking</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-6'>
                <buttom className='rounded-full bg-[#7F67AA] text-white text-xs px-7 py-3' >Request Info</buttom>
                <buttom className="rounded-full text-xs border-[#239CAC] border px-7 py-3 text-[#239CAC]">Buy Now</buttom>
            </div>
        </>
    )
}

export default RequestBody