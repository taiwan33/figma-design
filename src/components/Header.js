import React, { useState } from 'react'
import * as Icons from "../assets";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex relative container justify-around items-center pt-6 bg-white'>
                <span className=''>
                    <Icons.Logo className='h-[100px] w-[106px] object-cover' />
                </span>
                <div className=' block md:hidden  space-y-1 right-4 ' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (<p className='text-3xl absolute right-10 top-1'>X</p>) :
                        <>
                            <div className='h-[3px] w-7 bg-black'></div>
                            <div className='h-[3px] w-7 bg-black'></div>
                            <div className='h-[3px] w-7 bg-black'></div>
                        </>
                    }
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:flex justify-center items-center gap-6 text-[#272D4E] list-none`}>
                    <li>recovery years</li>
                    <li>typing courses</li>
                    <li>training</li>
                    <li>language courses</li>
                    <li>companies</li>
                    <li>contacts</li>
                </div>
            </div>
        </>
    )
}

export default Header