import {CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/solid";
import React from 'react';
import bghome from '../assets/img/server.png';
export default function Hero() {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='ml-10 my-auto'>
                <p className="text-2xl">Unique Sequencing & production</p>
                <h1 className='text-4xl py-2 font-bold'>Cloud Management</h1>
                <p className="text-2xl pb-2">This is our Tech brand</p>
                <button className="bg-sky-500 border-none py-2 px-3 rounded-md text-white sm:w-[80%]">Get Started</button>
            </div>
            <div>
                <img className="w-full" src={bghome} alt="" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[1%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300
            rounded-xl text-center shadow-xl'>
              <p className="text-2xl">Data Services</p>
              <div className="flex justify-between flex-wrap px-4">
                <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-sky-500"/> App Security</p>
                <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-sky-500"/> Dashbord Design</p>
                <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-sky-500"/> Cloud Data</p>
                <p className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-sky-500"/> API</p>
              </div>
            </div>
        </div>
    </div>
  )
}
