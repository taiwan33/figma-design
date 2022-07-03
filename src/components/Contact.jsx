import React from 'react'
import Picture from '../assets'

const Contact = () => {
    return (
        <div className=' pt-12 bg-gradient-to-b from-[#ECF0DE] to bg-[#ECF0DE]'>
            <div className='flex justify-center gap-4 '>
                <p className='text-[#272D4E] font-semibold text-4xl'>Contact us</p>
            </div>
            <div className='flex justify-around text-center pt-4'>
                <img className=' h-16 md:h-24 w-auto' src={Picture.form1} alt="" />
                <p className='text-sm md:text-lg font-medium md:text-black text-[#94A2B3]'>fill out the form to receive <br />more information</p>
                <img className='h-16 md:h-24 w-auto' src={Picture.form5} alt="" />
            </div>
            <form className='flex justify-around place-items-center relative text-[#94A2B3] mt-3 w-[100%] z-10'>
                <img src={Picture.dot} className="h-72 rotate-90 absolute right-32 top-52 z-0" alt="" />

                <div className='hidden md:flex'>
                    <img className='h-24 w-auto' src={Picture.form3} alt="" />
                </div>
                <div className='bg-white z-20 w-[90%] rounded-xl'>
                    <div className=' grid md:grid-cols-2 gap-4 p-6'>
                        <input className='form-input' placeholder='Name*' />
                        <input className='form-input' placeholder='Surname*' />
                        <input className='form-input' placeholder='Telephone*' />
                        <input className='form-input' placeholder='Email*' />
                        <textarea className='form-input w-[100%] md:w-[205%] h-36' placeholder='Write a message here to get apointment' />
                    </div>
                    <div className='flex ml-6 place-items-center gap-6'>
                        <input type='checkbox' id='consent' />
                        <label htmlFor='consent' className='text-sm'>I consent to the processing of my personal data.</label>
                    </div>
                    <div className='flex justify-center my-4'>
                        <button className='flex justify-center rounded-full w-full mx-7 md:w-16 bg-[#7F67AA] text-white text-lg md:text-xs px-16 py-2' >Send</button>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <img className='h-24 w-auto' src={Picture.form4} alt="" />
                </div>
            </form>
            <div className='flex justify-around py-3'>
                <img className='h-12 md:h-24 w-auto' src={Picture.form1} alt="" />
                <img className='h-12 md:h-24 w-auto relative z-20' src={Picture.form6} alt="" />
            </div>
        </div>
    )
}

export default Contact