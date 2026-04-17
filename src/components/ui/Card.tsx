"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Card({bgColor}: {bgColor?: string}) {
  return (
    <motion.div 

    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    whileHover={{scale:1.05}}
      viewport={{ once: true }}
    className="cursor-pointer relative flex flex-col gap-2 w-[17rem] text-black p-3 rounded-xl border border-gray-100 shadow-sm bg-white  overflow-hidden group">
      {/* Top Right Decorative Shape */}
      <div 
        style={{ backgroundColor: bgColor }}
      className="absolute top-0 right-0 w-26 h-26  rounded-bl-[5rem] origin-top-right transition-transform duration-500 group-hover:scale-105" />

      {/* Number Badge */}
      <div className="relative z-10 w-fit px-2 py-1 flex items-center justify-center border-2 border-gray-100 rounded-full text-xl font-bold text-gray-700 bg-white shadow-sm">
        01
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h2 className="text-[1.2rem] font-extrabold tracking-tight text-[#2D2D2D] leading-[1.2]">
          Residential property
        </h2>
        <p className="text-[#6B6B6B] text-sm  font-medium">
          Providing private investors with investment opportunities usually
          available only to major institutional investors.
        </p>
      </div>

      {/* Button */}
      <button className="relative z-10 mt-4 flex items-center gap-2 text-[#2D2D2D] font-bold hover:text-black transition-colors group/btn">
        <span className="text-lg">View More</span>
        <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
      </button>
    </motion.div>
  );
}

export default Card;
