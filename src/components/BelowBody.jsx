import React from 'react'
import Picture from '../assets'

const BelowBody = () => {
    return (
        <div className="bg-[#7854F7]">
            <div className=' bg-white h-24 clip_path '></div>
            <div className='bg-[#7854F7] px-16 overflow-visible md:px-20 pb-4 md:pb-0 md:-mb-4 '>
                <div className='block md:flex px-[4%]'>
                    <div className='relative flex-1 '>
                        <img className='flex-shrink-0 object-contain relative overflow-visible !-top-16 z-50' src={Picture.bbody2} alt="" />
                        <div>
                            <div>
                                <img className='h-8 w-auto absolute top-[17%] -left-2' src={Picture.ring2} alt="" />
                            </div>
                            <div className=''>
                                <img className=' h-56 w-auto absolute bottom-[12%] -left-2' src={Picture.ring} alt="" />
                            </div>
                        </div>
                        <img src={Picture.dot} className=" h-[272px] w-auto z-10 absolute left-2 top-[52%]" alt="" />
                    </div>

                    <div className='text-white flex-1 -mt-24 md:ml-10 place-self-center space-y-5 px-[2%]'>
                        <p className='text-3xl md:text-xl font-semibold'>Recipients</p>
                        <p className='text-md md:text-xs tracking-wider'>This course is aimed at those who want to write with the keyboard correctly optimizing time and those who spend hours writing on the keyboard for work and still have not acquired the skills necessary to write with the ten fingers without looking at the keyboard.</p>
                        <button className='bg-[#239CAC] btn text:2xl md:text-xs '>Read the  Documentation</button>
                    </div>
                    <div className='w-[18%]'></div>
                </div>
                <div className='text-white flex-col-reverse flex md:flex-row mt-5 md:mt-0'>
                    <div className='w-[18%]'></div>
                    <div className=' space-y-5 flex-1 place-self-center px-[2%]'>
                        <p className='text-3xl md:text-xl font-semibold'>Programs</p>
                        <p className='text-md md:text-xs tracking-wider'>The proposed program consists of a first theoretical part and, to follow, a series of exercises designed by the training institution "Unitalent", you will gradually get to write texts through the use of 10 fingers.</p>
                        <button className='bg-[#239CAC] btn text:2xl md:text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1'>
                        <div className='flex '>
                            <div className='relative'>
                                <img className='flex-shrink-0 object-contain h-[400px] w-auto relative z-10' src={Picture.bbody1} alt="" />
                                <img className='flex-shrink-0 object-contain h-10 w-auto absolute top-1 left-24 z-20' src={Picture.ring2} alt="" />
                                <img className='flex-shrink-0 object-contain h-40 w-auto absolute top-0 -right-16' src={Picture.ring} alt="" />
                                <img src={Picture.dot} className="flex-shrink-0 object-contain h-[272px] rotate-90 absolute right-4 top-32" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:flex py-[2%] px-[4%] mt-5 md:mt-0'>
                    <div className='relative flex-1 pl-8'>
                        <img className='flex-shrink-0 object-contain h-[400px] w-auto relative z-10' src={Picture.bbody3} alt="" />
                        <div className=''>
                            <div>
                                <img className='flex-shrink-0 object-contain h-10 w-10 absolute top-24 -left-12 z-20' src={Picture.ring2} alt="" />
                            </div>
                            <div className=''>
                                <img className='flex-shrink-0 object-contain h-[272px] absolute -bottom-12 -left-14 w-auto' src={Picture.ring} alt="" />
                            </div>
                            <img src={Picture.dot} className="flex-shrink-0 object-contain h-72 absolute -left-10 -bottom-44" alt="" />
                        </div>
                    </div>
                    <div className='text-white flex-1 place-self-center space-y-5 mt-10 md:mt-0'>
                        <p className='text-3xl md:text-xl font-semibold'>Certification</p>
                        <p className='text-md md:text-xs tracking-wider'>At the end of the course there will be a final exam to certify the skills acquired. Upon passing the exam, a Certificate of Professional Training for Typing will be issued.</p>
                        <button className='bg-[#239CAC] btn text:2xl md:text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='w-[13%]'></div>
                </div>
                <div className='text-white flex flex-col-reverse md:flex-row mr-10 mt-5 md:mt-0'>
                    <div className='flex-1'></div>
                    <div className=' space-y-5 flex-1 place-self-center pt-5 md:pt-0 pr-[4%]'>
                        <p className='text-3xl md:text-xl font-semibold'>Legislation</p>
                        <p className='text-md md:text-xs tracking-wider'>In accordance with this decree, the FAQ 16 of the MIUR is reported where it is defined what is meant by Typing Course: "Certificate of professional training for typing or certificate of professional training for mechanographic services issued at the end of professional courses established by the State, the Regions or other public bodies (only one certificate is evaluated) contained in the evaluation tables of the qualifications attached to Ministerial Decree 640 of 2017 ".</p>
                        <button className='bg-[#239CAC] btn text:2xl md:text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1 '>
                        <div className='relative'>
                            <img className='flex-shrink-0 object-contain h-[400px] w-auto relative z-10' src={Picture.bbody4} alt="" />
                            <img className='flex-shrink-0 object-contain h-10 w-auto absolute -top-7 left-[8%] z-20' src={Picture.ring2} alt="" />
                            <img className='flex-shrink-0 object-contain h-44 w-auto absolute -top-[9%] -right-[5%]' src={Picture.ring} alt="" />
                            <img src={Picture.dot} className="flex-shrink-0 object-contain h-72 rotate-90 absolute right-[7%] top-[26%]" alt="" />

                        </div>
                    </div>
                </div>
                <div className='block md:flex px-[4%] mt-8 md:mt-0'>
                    <div className='relative flex-1 ml-10'>
                        <img className='flex-shrink-0 object-contain h-[400px] w-auto relative z-20' src={Picture.bbody5} alt="" />
                        <div className=''>
                            <img className='flex-shrink-0 object-contain h-10 w-auto absolute top-20 -left-14 z-30' src={Picture.ring2} alt="" />
                            <img className='flex-shrink-0 object-contain h-56 w-auto absolute -bottom-12 z-10 -left-14' src={Picture.ring} alt="" />
                            <img src={Picture.dot} className="flex-shrink-0 object-contain h-72 absolute z-10 -left-12 -bottom-20" alt="" />
                        </div>
                    </div>
                    <div className='text-white flex-1 place-self-center space-y-5 md:ml-10 mt-10 md:mt-0'>
                        <p className='text-3xl md:text-xl font-semibold'>Recipients</p>
                        <p className='text-md md:text-xs tracking-wider'>Deliberation
                            Provided by Unitalent S.r.l. is established by the Municipality of Philadelphia, Public Body, as per resolution number 28 of 16/04/2020 which delegates the complete management and provision of the aforementioned course, see protocol by clicking here</p>
                        <button className='bg-[#239CAC] btn text:2xl md:text-xs'>Read the  Documentation</button>
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
            <div className='bg-white rotate-180 h-44  clip_path'>
            </div>
        </div>
    )
}

export default BelowBody