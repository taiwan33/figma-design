import React from 'react'
import Picture from '../assets'

const BelowBody = () => {
    return (
        <div className='bg-[#7854F7] px-20 my-20 clip_path '>
            <div className='flex ml-10'>
                <div className='relative flex-1'>
                    <div className=''>
                        <img className='h-[400px] w-[300px] relative z-10' src={Picture.bbody2} alt="" />
                    </div>
                    <div>
                        <img className='h-10 w-10 absolute top-20 -left-6' src={Picture.ring2} alt="" />
                    </div>
                    <div className=''>
                        <img className='h-56 absolute bottom-0 -left-6 w-auto' src={Picture.ring} alt="" />
                    </div>
                </div>
                <div className='text-white flex-1 pl-9 place-self-center space-y-5'>
                    <p className='text-xl font-semibold'>Recipients</p>
                    <p className='text-xs tracking-wider'>This course is aimed at those who want to write with the keyboard correctly optimizing time and those who spend hours writing on the keyboard for work and still have not acquired the skills necessary to write with the ten fingers without looking at the keyboard.</p>
                    <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                </div>
                <div className='flex-1'></div>
            </div>

            <div className='text-white flex mr-10'>
                <div className='flex-1'></div>
                <div className=' space-y-5 flex-1 place-self-center'>
                    <p className='text-xl font-semibold'>Programs</p>
                    <p className='text-xs tracking-wider'>The proposed program consists of a first theoretical part and, to follow, a series of exercises designed by the training institution "Unitalent", you will gradually get to write texts through the use of 10 fingers.</p>
                    <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                </div>
                <div className='flex-1 relative'>
                    <div className=''>
                        <img className='h-[400px] w-[300px] relative z-10' src={Picture.bbody1} alt="" />
                    </div>
                    <div>
                        <img className='h-10 w-10 absolute top-0 left-24 z-20' src={Picture.ring2} alt="" />
                    </div>
                    <div className=''>
                        <img className=' h-36 absolute top-0 right-4 w-auto' src={Picture.ring} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex ml-10'>
                <div className='relative flex-1'>
                    <div className=''>
                        <img className='h-[400px] w-[300px] relative z-10' src={Picture.bbody3} alt="" />
                    </div>
                    <div>
                        <img className='h-10 w-10 absolute top-20 -left-14 z-20' src={Picture.ring2} alt="" />
                    </div>
                    <div className=''>
                        <img className='h-56 absolute -bottom-12 -left-14 w-auto' src={Picture.ring} alt="" />
                    </div>
                </div>
                <div className='text-white flex-1 pl-9 place-self-center space-y-5'>
                    <p className='text-xl font-semibold'>Certification</p>
                    <p className='text-xs tracking-wider'>At the end of the course there will be a final exam to certify the skills acquired. Upon passing the exam, a Certificate of Professional Training for Typing will be issued.</p>
                    <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                </div>
                <div className='flex-1'></div>
            </div>

            <div className='text-white flex mr-10'>
                <div className='flex-1'></div>
                <div className=' space-y-5 flex-1 place-self-center'>
                    <p className='text-xl font-semibold'>Programs</p>
                    <p className='text-xs tracking-wider'>The proposed program consists of a first theoretical part and, to follow, a series of exercises designed by the training institution "Unitalent", you will gradually get to write texts through the use of 10 fingers.</p>
                    <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                </div>
                <div className='flex-1 relative'>
                    <div className=''>
                        <img className='h-[400px] w-[300px] relative z-10' src={Picture.bbody4} alt="" />
                    </div>
                    <div>
                        <img className='h-10 w-10 absolute -top-6 left-24 z-20' src={Picture.ring2} alt="" />
                    </div>
                    <div className=''>
                        <img className=' h-36 absolute -top-8 right-4 w-auto' src={Picture.ring} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex ml-10'>
                <div className='relative flex-1'>
                    <div className=''>
                        <img className='h-[400px] w-[300px] relative z-10' src={Picture.bbody5} alt="" />
                    </div>
                    <div>
                        <img className='h-10 w-10 absolute top-20 -left-14 z-20' src={Picture.ring2} alt="" />
                    </div>
                    <div className=''>
                        <img className='h-56 absolute -bottom-12 -left-14 w-auto' src={Picture.ring} alt="" />
                    </div>
                </div>
                <div className='text-white flex-1 pl-9 place-self-center space-y-5'>
                    <p className='text-xl font-semibold'>Recipients</p>
                    <p className='text-xs tracking-wider'>Deliberation
                        Provided by Unitalent S.r.l. is established by the Municipality of Philadelphia, Public Body, as per resolution number 28 of 16/04/2020 which delegates the complete management and provision of the aforementioned course, see protocol by clicking here</p>
                    <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                </div>
                <div className='flex-1'></div>
            </div>
        </div>
    )
}

export default BelowBody