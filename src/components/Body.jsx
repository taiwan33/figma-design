import React from 'react'
import Picture from '../assets'


const Body = () => {
    return (
        <>
            <div className='md:flex-row flex flex-col-reverse justify-between py-32 md:pt-32 md:pb-40 bg-gradient-to-b from-[#E5EFFF] to bg-white'>
                <div className='grid place-items-center text-center  w-[100%] md:w-[50%]'>
                    <p className='text-5xl mt-8 font-bold text-[#272D4E]'>Typing <br className='hidden md:block' /> Course</p>
                    <p className="mt-[33px] mx-[12%] mb-[40px] text-[20px] z-20 relative md:text-[15px] text-[#94A2B3]">
                        The Typing Course is a training course on the correct use of the keyboard.
                        In an age where you write much more with the keyboard than with the pen, it becomes necessary to acquire the skills to write with 10 fingers.
                    </p>
                    <button className='bg-[#7854F7] text-white text-md md:text-xs rounded-full px-6 py-4'>Go To Course Page</button>
                </div>
                <div className=' mt-6 ml-20 '>
                    <div className='relative'>
                        <img className='image h-[260px] z-20 relative' src={Picture.girl1} alt="" />
                        <div className='flex'>
                            <img src={Picture.dot} className="h-[340px] z-10 absolute right-12 -top-20" alt="" />
                            <img src={Picture.white} className="h-[500px] z-10 absolute right-8 top-32" alt="" />
                            <img src={Picture.dot} className="h-[340px] hidden md:flex z-10 absolute right-8 -bottom-24" alt="" />

                            <span className='h-8'>
                                <img className='absolute -left-12 -top-14 image h-[120px] z-20' src={Picture.girl2} alt="" />
                            </span>
                            <span className='flex h-8 px-2 z-30 absolute -top-3 right-36 py-1 rounded-full bg-[#70C217]'>
                                <p className='text-white text-sm tracking-widest'>Courses</p>
                            </span>
                            <span className='flex absolute z-30 bottom-16 -left-4 p-2 h-9 w-9 shrink-0 bg-[#F49D2D] rounded-full'>
                                <img className='h-4 w-5' src={Picture.vector} alt="" />
                            </span>
                            <span className='flex z-30 justify-center absolute items-center right-12 bottom-3 p-2 h-9 w-12 shrink-0 bg-[#239CAC] rounded-full'>
                                <img className='h-4 w-5 ' src={Picture.vector1} alt="" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Body