import React from 'react'
import Picture from '../assets'

const BelowBody = () => {
    return (
        <div class="bg-[#7854F7]">
            <div className=' bg-white h-44 clip_path w-screen'></div>
            <div className='bg-[#7854F7] px-16 overflow-visible  md:px-20 mb-20'>
                <div className='block md:flex'>
                    <div className='relative flex-1 '>
                        <div className='flex-shrink-0'>
                            <img className=' flex-shrink-0 object-contain relative overflow-visible !-top-10 z-50' src={Picture.bbody2} alt="" />
                        </div>
                        <div>
                            <img className='h-10 w-10 absolute top-20 -left-6' src={Picture.ring2} alt="" />
                        </div>
                        <div className=''>
                            <img className='h-56 absolute bottom-0 -left-6 w-auto' src={Picture.ring} alt="" />
                        </div>
                    </div>
                    <div className='text-white flex-1 md:ml-10 place-self-center space-y-5'>
                        <p className='text-xl font-semibold'>Recipients</p>
                        <p className='text-xs tracking-wider'>This course is aimed at those who want to write with the keyboard correctly optimizing time and those who spend hours writing on the keyboard for work and still have not acquired the skills necessary to write with the ten fingers without looking at the keyboard.</p>
                        <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1'></div>
                </div>
                <div className='text-white flex-col-reverse flex md:flex-row mr-10 mt-10'>
                    <div className='flex-1'></div>
                    <div className=' space-y-5 flex-1 place-self-center'>
                        <p className='text-xl font-semibold'>Programs</p>
                        <p className='text-xs tracking-wider'>The proposed program consists of a first theoretical part and, to follow, a series of exercises designed by the training institution "Unitalent", you will gradually get to write texts through the use of 10 fingers.</p>
                        <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1 relative '>
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
                <div className='block md:flex mt-10'>
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
                    <div className='text-white flex-1 md:ml-10 place-self-center space-y-5 mt-10 md:mt-0'>
                        <p className='text-xl font-semibold'>Certification</p>
                        <p className='text-xs tracking-wider'>At the end of the course there will be a final exam to certify the skills acquired. Upon passing the exam, a Certificate of Professional Training for Typing will be issued.</p>
                        <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1'></div>
                </div>
                <div className='text-white flex flex-col-reverse md:flex-row mr-10 mt-10 '>
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
                <div className='block md:flex mt-10'>
                    <div className='relative flex-1'>
                        <div className=''>
                            <img className='h-[400px] w-auto relative z-10' src={Picture.bbody5} alt="" />
                        </div>
                        <div>
                            <img className='h-10 w-10 absolute top-20 -left-14 z-20' src={Picture.ring2} alt="" />
                        </div>
                        <div className=''>
                            <img className='h-56 absolute -bottom-12 -left-14 w-auto' src={Picture.ring} alt="" />
                        </div>
                    </div>
                    <div className='text-white flex-1 place-self-center space-y-5 md:ml-10 mt-10 md:mt-0'>
                        <p className='text-xl font-semibold'>Recipients</p>
                        <p className='text-xs tracking-wider'>Deliberation
                            Provided by Unitalent S.r.l. is established by the Municipality of Philadelphia, Public Body, as per resolution number 28 of 16/04/2020 which delegates the complete management and provision of the aforementioned course, see protocol by clicking here</p>
                        <button className='bg-[#239CAC] btn text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
            <div className='bg-white rotate-180 h-44 w-screen clip_path'>
            </div>
        </div>
    )
}

export default BelowBody