import React from 'react'
import * as Icons from "../assets";

const Header = () => {
    return (
        <div class="grid place-content-center">
            <div className='flex relative container justify-between items-center pt-6 '>
                <span className='pl-24'>
                    <Icons.Logo className='h-[100px] w-[106px] object-cover' />
                </span>
                <div className='space-x-6 mx-12 flex flex-1 justify-center text-[#272D4E]'>
                    <span>recovery years</span>
                    <span>typing courses</span>
                    <span>training</span>
                    <span>language courses</span>
                    <span>companies</span>
                    <span>contacts</span>
                </div>
            </div>
        </div>
    )
}

export default Header