import React from 'react'
import supportimg from '../assets/img/img-5.jpg'
import {ChipIcon,SupportIcon} from '@heroicons/react/solid'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
export default function Support() {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/80 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportimg} alt="support" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-4xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-2xl text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error quasi sit? Dignissimos et deserunt nam vitae voluptas tempora sapiente!</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-sky-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold my-6 text-2xl'>Sales</h3>
                        <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio, dignissimos ab maiores perspiciatis velit explicabo? Natus, animi recusandae veniam ipsa labore nobis illo. Exercitationem ipsam iure placeat illo aspernatur.</p>
                    </div>
                    <div className='pl-8 bg-slate-100 py-4 rounded-xl'>
                        <p className='flex items-center text-sky-500'>contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-sky-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold my-6 text-2xl'>Technical Support</h3>
                        <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio, dignissimos ab maiores perspiciatis velit explicabo? Natus, animi recusandae veniam ipsa labore nobis illo. Exercitationem ipsam iure placeat illo aspernatur.</p>
                    </div>
                    <div className='pl-8 bg-slate-100 py-4 rounded-xl'>
                        <p className='flex items-center text-sky-500'>contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-sky-500 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold my-6 text-2xl'>Media Inquiries</h3>
                        <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio, dignissimos ab maiores perspiciatis velit explicabo? Natus, animi recusandae veniam ipsa labore nobis illo. Exercitationem ipsam iure placeat illo aspernatur.</p>
                    </div>
                    <div className='pl-8 bg-slate-100 py-4 rounded-xl'>
                        <p className='flex items-center text-sky-500'>contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
