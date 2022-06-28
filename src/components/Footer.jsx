import React from 'react'
import Picture, { Twitter, Facebook, Wifi, Media } from '../assets'

const Footer = () => {
    return (
        <>
            <div className='flex justify-center gap-x-6 mt-11'>
                <div>
                    <div>
                        <hr className='bg-[#239CAC] w-[380px] h-1' />
                        <div className='flex mt-3 items-center gap-3'>
                            <img src={Picture.footer} alt="" />
                            <p className='text-xs'>accredited Body to the Lazio Region</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-xs'>
                        <hr className='bg-[#239CAC] w-[180px] h-1' />
                        <div className='mt-3'>
                            <p>Centro Studi Civita 2000 sas</p>
                            <p>VAT number 01677660563</p>
                            <p>Loc. Pizzo Garofalo</p>
                            <p>01033 Civita Castellana (VT)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-xs'>
                        <hr className='bg-[#239CAC] w-[180px] h-1' />
                        <div className='mt-3'>
                            <p>Tel / Fax</p>
                            <p> 0761.515963</p>
                            <p> segreteria@centrostudicivita.it</p>
                            <p> centrostudicivita.it</p>
                            <p> Quality Charter</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly mt-6'>
                <div className='flex gap-5'>
                    <Twitter />
                    <Facebook />
                    <Wifi />
                    <Media />
                </div>
                <div>
                    <p className='text-[#272D4E] text-sm'>centrostudicivita 2021 - TERMS & CONDITIONS  PRIVACY POLICY</p>
                </div>
            </div>
        </>
    )
}

export default Footer