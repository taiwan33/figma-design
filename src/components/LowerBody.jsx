import React from 'react'
import Picture from '../assets'

const LowerBody = () => {
    return (
        <div className='grid md:flex bg-white justify-between pb-16'>
            <div className='flex flex-1 relative'>
                <div className='relative h-24 '>
                    <img src={Picture.lbody1} alt="" />
                </div>
                <div className='absolute -top-[13%] left-[7%]'>
                    <img className='h-44' src={Picture.lbody3} alt="" />
                </div>
                <div className='absolute hidden md:-right-10 -bottom-14'>
                    <img className='h-44' src={Picture.lbody2} alt="" />
                </div>
            </div>
            <div className='flex-1 pt-[50%] md:pt-[10%] px-[12%]'>
                <p className='text-4xl font-bold text-[#272D4E]'>Typing Course</p>
                <p className="mt-[33px] mb-[50px] text-[12px] ">
                    The aim of this course is to introduce the potential of the keyboard and to convey, to those who intend to undertake the proposed educational path, the notions for writing correctly with 10 fingers without looking at the keyboard (blind keyboard).
                </p>
                <p className='text-[#299EF3]'>Check for Forums?</p>
            </div>
        </div>
    )
}

export default LowerBody