import React, { useState } from 'react'
import * as Icons from "../assets";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex relative justify-around items-center pt-6 w-full bg-[#E5EFFF]'>
                <span className=''>
                    <Icons.Logo className='h-[100px] w-[106px] object-cover' />
                </span>
                <div className=' block md:hidden space-y-1' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (<p className='text-3xl absolute right-32 top-0'>X</p>) :
                        <>
                            <div className='h-[3px] w-7 bg-black'></div>
                            <div className='h-[3px] w-7 bg-black'></div>
                            <div className='h-[3px] w-7 bg-black'></div>
                        </>
                    }
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:flex justify-center items-center gap-6 text-[#272D4E] list-none `}>
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