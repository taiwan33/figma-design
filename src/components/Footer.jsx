import React from 'react'
import Picture, { Twitter, Facebook, Media } from '../assets'

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-2 justify-items-center md:flex md:justify-center gap-x-6 mt-11'>
                <div>
                    <hr className='bg-[#239CAC] w-[210%] h-1' />
                    <div className=''>
                        <div className='flex mt-4 gap-3'>
                            <img src={Picture.footer} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-xs '>accredited Body to the Lazio Region</p>
                </div>
                <div className='text-xs mx-3'>
                    <hr className='bg-[#239CAC] w-0 md:w-[100%] h-1' />
                    <div className='mt-4'>
                        <p>Centro Studi Civita 2000 sas</p>
                        <p>VAT number 01677660563</p>
                        <p>Loc. Pizzo Garofalo</p>
                        <p>01033 Civita Castellana (VT)</p>
                    </div>
                </div>
                <div className='text-xs'>
                    <hr className='bg-[#239CAC] w-0 md:w-[100%] h-1' />
                    <div className='mt-4'>
                        <p>Tel / Fax</p>
                        <p> 0761.515963</p>
                        <p> segreteria@centrostudicivita.it</p>
                        <p> centrostudicivita.it</p>
                        <p> Quality Charter</p>
                    </div>
                </div>
            </div>
            <div className='grid md:flex justify-around my-6'>
                <div className='flex gap-x-2 md:gap-5'>
                    <Twitter className='h-5 w-5 md:h-6 md:w-6 shrink-0' />
                    <Facebook className='h-5 w-5 md:h-6 md:w-6 shrink-0' />
                    <Media className='h-5 w-5 md:h-6 md:w-6 shrink-0' />
                    <img className='h-5 w-5 md:h-6 md:w-6 shrink-0' src={Picture.wifi} alt="" />
                </div>
                <div>
                    <span className='flex text-[#272D4E] text-xs md:text-sm'>centrostudicivita 2021 - <p className=' text-xs md:text-sm underline'>TERMS & CONDITIONS  PRIVACY POLICY</p></span>
                </div>
            </div>
        </>
    )
}

export default Footer