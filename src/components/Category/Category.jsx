import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Image4 from '../../assets/category/gaming.png'
import Image5 from '../../assets/category/vr.png'
import Image6 from '../../assets/category/speaker.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            {/* first-row  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first column */}
                <div className='py-10 pl-5 bg-black text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphones</p>
                            <Button text ="Browse" bgColor="bg-primary" textColor="text-white"/>
                        </div>
                        <img src={Image1} alt="" className='w-[320px] absolute bottom-0'/>
                    </div>
                </div>
                {/* second column */}
                <div className='py-10 pl-5 bg-yellow-500 text-black rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadgets</p>
                            <Button text ="Browse" bgColor="bg-white" textColor="text-yellow-500 "/>
                        </div>
                        <img src={Image2} alt="" className='w-[280px] absolute top-0 right-0'/>
                    </div>
                </div>
                {/* third column  */}
                <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptops</p>
                            <Button text ="Browse" bgColor="bg-white" textColor="text-red-500"/>
                        </div>
                        <img src={Image3} alt="" className='w-[320px] absolute top-[10px] right-[10px]'/>
                    </div>
                </div>
            </div>

                {/* second row  */}
            
            <div className='py-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first column */}
                    <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500 to-gray-200/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Console</p>
                                <Button text ="Browse" bgColor="bg-white" textColor="text-red-500"/>
                            </div>
                            <img src={Image4} alt="" className='w-[320px] absolute top-[10px] right-[10px]'/>
                        </div>
                    </div>
                    <div className='py-10 pl-5 bg-green-500 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4 absolute top-3'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Oculus</p>
                                <Button text ="Browse" bgColor="bg-primary" textColor="text-white"/>
                            </div>
                            <img src={Image5} alt="" className='w-[250px] absolute bottom-0 right-1'/>
                        </div>
                    </div>
                    {/* second column */}
                    <div className='py-10 pl-5 bg-yellow-500 text-black rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4 absolute top-3'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Speaker</p>
                                <Button text ="Browse" bgColor="bg-white" textColor="text-yellow-500 "/>
                            </div>
                            <img src={Image6} alt="" className='w-[250px] absolute bottom-2 right-1'/>
                        </div>
                    </div>
                    {/* third column  */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category