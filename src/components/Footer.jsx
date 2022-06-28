import React from 'react'
import Picture from '../assets'

const Footer = () => {
    return (
        <div className='grid text-center pt-16 bg-gradient-to-b from-[white] to bg-[#ECF0DE]'>
            <div className=' gap-4'>
                <p className='text-[#272D4E] text-4xl'>Contact us</p>
            </div>
            <div className='flex justify-around text-center'>
                <img src={Picture.form1} alt="" />
                <p className='text-xl font-medium'>fill out the form to receive <br />more information</p>
                <img src={Picture.form5} alt="" />
            </div>
            <form className='bg-white grid grid-cols-2 mx-[10%] my-[2%] gap-6 p-6'>
                <input className='form-input' placeholder='Name' />
                <input className='form-input' placeholder='Surname' />
                <input className='form-input' placeholder='Telephone' />
                <input className='form-input' placeholder='Email' />
                <input className='form-input w-full' placeholder='Write a message here to get apointment' />
            </form>
        </div>
    )
}

export default Footer