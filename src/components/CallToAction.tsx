"use client";

import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import {motion} from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
   const containerRef = useRef<HTMLDivElement>(null);

   const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
   });

   useEffect(() => {
    scrollYProgress.on("change", (value) => console.log("value", value));
   }, []);

   const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div 
    className="bg-black text-white py-[72px] sm:py-24 text-center"
    ref={containerRef}
    >
     <div className="container max-w-xl relative">
        
     <motion.div style={{ translateY }}>
     <Image 
       src={emojiStarImage} 
       alt="" 
       className=" absolute  top-6 left-[calc(100%+36px)] sm:hidden lg:inline-block" 
       />
     </motion.div>

     <motion.div style={{ translateY }} >
     <Image 
       src={helixImage} 
       alt="" 
       className=" absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline"
       />
     </motion.div>

      <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl ">

        Get instant access</h2>

        <p className="text-xl text-white/70 mt-5">

        For writing collaborative papers and presentations, you don't have to wait for your colleagues to gather.
         Work together on the project at different times. <br/> Go now and try it yourself!
         
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input 
          type="e-mail" 
          placeholder="your@email.com" 
          className="h-12 bg-white/20 rounded-lg px-5 font-md pleacholder:text-[#9CA3AF] sm:flex-1"/>
         
          <button className="bg-white text-black font-bold h-12 rounded-lg px-5">
            Get access</button>

        </form>
     </div>
    </div>
  );
};

export default CallToAction;

