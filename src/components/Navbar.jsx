import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import logoreza from "../assets/img/Asset 2-8.png";
import logorezasm from '../assets/img/reza-logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
export default function Navbar() {
  const [nav, setnav] = useState(false);
  const handelClick = () => setnav(!nav);
  const handelClose = () => setnav(!nav)

  return (
    <div
      className="w-screen h-[80px] z-10 bg-zinc-200 
    fixed drop-shadow-lg"
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center ">
          <img src={logoreza} alt="logo-reza" className="w-40 mr-4 md:hidden " />
          <img src={logorezasm} alt="logo-reza" className="w-[70px] mr-4 md:flex hidden" />
          <ul className="md:flex hidden sm:text-xl">
            <li className="p-4 font-bold md:text-sm">
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="p-4 font-bold md:text-sm">
              {" "}
              <Link to="about" smooth={true} offset={-200} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="p-4 font-bold md:text-sm">
              {" "}
              <Link to="support" smooth={true} offset={-50} duration={500}>
                SUPPORT
              </Link>
            </li>
            <li className="p-4 font-bold md:text-sm">
              {" "}
              <Link to="paltforms" smooth={true} offset={-100} duration={500}>
                PLATFORMS
              </Link>
            </li>
            <li className="p-4 font-bold md:text-sm">
              {" "}
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                PRICING
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="hover:bg-sky-500 hover:text-white px-3 border-none bg-transparent rounded-md mr-2">
            sing in
          </button>
          <button className="bg-sky-500 border-none px-3 py-2 rounded-md text-white">
          sing up
          </button>
        </div>
        <div className="md:hidden" onClick={handelClick}>
          {!nav ? (
            <MenuIcon className="w-6 mr-4" />
          ) : (
            <XIcon className="w-6 mr-4" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <li className="p-4 border-b-2 border-zinc-300 w-full">
              <Link onClick={handelClose} to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li className="p-4 border-b-2 border-zinc-300 w-full">
              {" "}
              <Link onClick={handelClose} to="about" smooth={true} offset={-200} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="p-4 border-b-2 border-zinc-300 w-full">
              {" "}
              <Link onClick={handelClose} to="support" smooth={true} offset={-50} duration={500}>
                SUPPORT
              </Link>
            </li>
            <li className="p-4 border-b-2 border-zinc-300 w-full">
              {" "}
              <Link onClick={handelClose} to="paltforms" smooth={true} offset={-100} duration={500}>
                PLATFORMS
              </Link>
            </li>
            <li className="p-4 border-b-2 border-zinc-300 w-full">
              {" "}
              <Link onClick={handelClose} to="pricing" smooth={true} offset={-50} duration={500}>
                PRICING
              </Link>
            </li>
    
        <div className="flex flex-col my-4">
          <button className="border-sky-500 border hover:bg-sky-500 mb-4 hover:text-white text-sky-500 py-5 px-4 rounded-md">
            sing in
          </button>
          <button className="bg-sky-500 border-none  py-5 px-4 rounded-md text-white">
            sing up
          </button>
        </div>
      </ul>
    </div>
  );
}
