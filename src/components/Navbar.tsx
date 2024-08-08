"use client";

import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from  "../assets/icons/menu.svg";
import { navigation } from "../constants";
import { useState } from "react";

export const Navbar = () => {

  const [openNavigation, setOpenNavigation] = useState
  (false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };
  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div className="bg-black">
    <div className="px-4">
   <div className="py-4 flex items-center justify-between">
  
    <div className="relative">
      <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md "></div>
      <Image 
       src={logoImage} 
       alt="Logo" 
       className="w-12 h-12 relative"/>
      </div>
    <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden ">
    <MenuIcon className="text-white/60 rotate-0 "/>
    </div>
    <nav className="gap-6 items-center sm:flex text-white/50 ">
    {navigation.map((item) => (
      <a 
      key={item.id} 
      href={item.url} 
      className="hover:text-purple-400 hover:underline text-white hidden
        sm:inline-block"
      >
        {item.title}
         
      </a>

    ))}

    <button className="bg-white py-2 px-4 text-black rounded hidden sm:inline"><a href="https://to-do-bice-mu.vercel.app/">Get for free</a></button>

    </nav>
   </div>
  </div>
  </div>
  );
};
