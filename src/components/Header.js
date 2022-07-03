import React, { useState } from 'react'
import Picture, * as Icons from "../assets";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    var List = [
        { name: 'recovery years' },
        { name: 'typing course' },
        { name: 'training' },
        { name: 'language courses' },
        { name: 'companies' },
        { name: 'contacts' },
    ]
    return (
        <>
            <div className='flex relative justify-around items-center pt-6 w-full bg-[#E5EFFF]'>
                <img src={Picture.white} className=" h-[500px] w-auto z-10 absolute left-[32%] top-1" alt="" />
                <div className=''>
                    <Icons.Logo className='h-[100px] w-auto z-30 relative object-cover ' />
                </div>
                <img src={Picture.white} className=" h-[500px] w-auto z-10 absolute right-[0%] top-1" alt="" />
                <img src={Picture.white} className=" h-[500px] rotate-180 w-auto z-10 absolute right-[22%] top-1" alt="" />

                {isOpen ? (<p onClick={() => setIsOpen(!isOpen)} className='text-3xl md:hidden -top-[60px] -right-12 relative z-40'>x</p>) : (
                    <div className='space-y-1 z-40 md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <div className='h-0.5 w-6 bg-black'></div>
                        <div className='h-0.5 w-6 bg-black'></div>
                        <div className='h-0.5 w-6 bg-black'></div>
                    </div>
                )}
                <ul className={`block pt-6 pr-5 space-y-2 top-0 md:space-y-0 absolute md:relative z-20 md:flex md:gap-x-5 transition-all duration-500 ${isOpen ? "right-6" : " right-6 -top-[212%]"}`}>
                    {
                        List.map((item, i) => (
                            <li key={i} className=' list-none'>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Header