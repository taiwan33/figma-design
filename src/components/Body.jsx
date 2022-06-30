import React from 'react'
import Picture from '../assets'

const Body = () => {
    return (
        <>
            <div className=' md:flex-row flex flex-col-reverse relative container justify-between mt-10 md:mt-24'>
                <div className='grid place-items-center w-[100%] md:w-[50%]'>
                    <p className='text-5xl mt-8 font-bold text-[#272D4E]'>Typing <br className='hidden md:block' /> Course</p>
                    <p className="mt-[33px] mx-[12%] mb-[40px] text-[20px] md:text-[15px] text-[#94A2B3]">
                        The Typing Course is a training course on the correct use of the keyboard.
                        In an age where you write much more with the keyboard than with the pen, it becomes necessary to acquire the skills to write with 10 fingers.
                    </p>
                    <button className='bg-[#7854F7] text-white text-md md:text-xs rounded-full px-6 py-4'>Go To Course Page</button>
                </div>
                <div className=' relative right-0 mt-6 ml-20'>
                    <div className=''>
                        <img className='image h-60' src={Picture.girl1} alt="" />
                    </div>
                    <div className='flex relative'>
                        <span className='absolute -top-[300px] h-8 -left-10'>
                            <img className='image h-[120px]' src={Picture.girl2} alt="" />
                        </span>
                        <span className='flex absolute -top-[250px] h-8 left-[180px] px-2 py-1 rounded-full bg-[#70C217]'>
                            <p className='text-white text-sm tracking-widest'>Courses</p>
                        </span>
                        <span className=' flex absolute -top-12 -left-4 justify-center items-center p-2 h-9 w-9 shrink-0 bg-[#F49D2D] rounded-full'>
                            <img className='h-4 w-5 ' src={Picture.vector} alt="" />
                        </span>
                        <span className=' flex absolute -bottom-5 right-12 md:-bottom-5 md:right-8 justify-center items-center p-2 h-9 w-12 shrink-0 bg-[#239CAC] rounded-full'>
                            <img className='h-4 w-5 ' src={Picture.vector1} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[8%] ml-[33%]'>
                <img className='h-32 w-40' src={Picture.pic} alt="" />
            </div>
        </>
    )
}

export default Body