import React from 'react'
import Picture from '../assets'

const LowerBody = () => {
    return (
        <div className='grid md:flex bg-white justify-between pb-6'>
            <div className='flex flex-1 relative'>
                <img className='' src={Picture.lbody1} alt="" />
                <div className=''>
                    <div className='absolute -top-[10%] left-[1%]'>
                        <img className='h-44 w-auto' src={Picture.lbody3} alt="" />
                    </div>
                    <div className='absolute -right-6 bottom-12'>
                        <img className='h-[134px] w-auto' src={Picture.lbody2} alt="" />
                    </div>
                    <div className='flex absolute right-0 -top-32 justify-center mt-[8%] ml-[33%]'>
                        <img className='h-32 w-auto' src={Picture.pic} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex-1 pt-6 px-[12%]'>
                <p className='text-4xl font-bold text-[#272D4E]'>Typing Course</p>
                <p className="mt-[23px] mb-[35px] text-[12px] ">
                    The aim of this course is to introduce the potential of the keyboard and to convey, to those who intend to undertake the proposed educational path, the notions for writing correctly with 10 fingers without looking at the keyboard (blind keyboard).
                </p>
                <p className='text-[#299EF3]'>Check for Forums?</p>
            </div>
        </div>
    )
}

export default LowerBody