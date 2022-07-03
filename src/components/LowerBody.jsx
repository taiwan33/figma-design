import React from 'react'
import Picture from '../assets'

const LowerBody = () => {
    return (
        <div className='flex-col flex md:flex-row bg-white justify-between pb-6 '>
            <div className='flex flex-1 relative'>
                <img className='' src={Picture.lbody1} alt="" />
                <div className=''>
                    <img className='absolute -top-[10%] left-[3%] h-44 w-auto' src={Picture.lbody3} alt="" />
                    <img className=' hidden md:flex absolute -right-[2%] bottom-[16%] h-[122px] w-auto' src={Picture.lbody2} alt="" />
                    <img className='absolute right-[4%] -top-[38%] mt-[8%] ml-[33%] h-32 w-auto' src={Picture.pic} alt="" />
                </div>
            </div>
            <div className='flex-1 pt-6 px-[12%]'>
                <p className='text-5xl font-bold text-[#272D4E] z-20 relative'>Typing Course</p>
                <p className="mt-[23px] mb-[35px] text-[17px] relative z-20">
                    The aim of this course is to introduce the potential of the keyboard and to convey, to those who intend to undertake the proposed educational path, the notions for writing correctly with 10 fingers without looking at the keyboard (blind keyboard).
                </p>
                <p className='text-[#299EF3] text-[17px]'>Check for Forums?</p>
            </div>
        </div>
    )
}

export default LowerBody