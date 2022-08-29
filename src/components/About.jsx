import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, esse.</p>
            </div>
            <div className='text-center grid md:grid-cols-3 gap-1 px-2'>
                <div className='border py-8 rounded-xl shadow-md'>
                    <p className='text-5xl text-sky-500 font-bold'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-md'>
                    <p className='text-5xl text-sky-500 font-bold'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-md'>
                    <p className='text-5xl text-sky-500 font-bold'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}
