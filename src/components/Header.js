import React from 'react'
import * as Icons from "../assets";

const Header = () => {
    return (
        <div>
            <div className='flex relative container justify-center gap-32  items-center pt-6 '>
                <span className='pl-24'>
                    <Icons.Logo className='h-[100px] w-[106px] object-cover' />
                </span>
                <ul className='flex justify-center items-center gap-6 text-[#272D4E] list-none'>
                    <li>recovery years</li>
                    <li>typing courses</li>
                    <li>training</li>
                    <li>language courses</li>
                    <li>companies</li>
                    <li>contacts</li>
                </ul>
            </div>
        </div>
    )
}

export default Header