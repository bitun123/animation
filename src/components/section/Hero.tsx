"use client";
import Image from "next/image";
import Navbar from "../ui/Navbar";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import BookingBar from "../ui/BookingBar";

function Hero() {
  return (
    <section className=" w-full h-screen overflow-hidden flex  items-center justify-center">
      <Image
        src="/image/hero.png"
        alt="Luxury Real Estate Hero"
        fill
        priority
        className="object-cover z-0 "
      />

      {/* Your content here */}
      <div className="relative z-10 flex flex-col w-[88%] h-[88%] border-4 border-white rounded-4xl">
        <Navbar />

        <div className="w-full flex justify-center items-center flex-col gap-2 text-center mt-3 ">
          <h1 className="text-[2.5rem] lg:text-[4.5rem] leading-[3.5rem] lg:leading-[4.5rem] font-md text-black">
            Find Your <br />
            Perfect <span className="text-[#F9F0A9]">Space</span>
          </h1>
          <p className=" text-[0.500rem] lg:text-sm leading-5 font-light text-gray-300">
            Discover Handpicked Luxury cabins in breathtaking locations unplug,{" "}
            <br /> Unwind ,And Reconnected With What Matters Most .
          </p>
        </div>

        <div className=" flex flex-col gap-3 relative ">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, -0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-fit absolute top-25 left-5  lg:top-28 lg:left-[30%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Wi-Fi 100 Mbps
              </span>
            </div>

            <div className="absolute top-6 left-[35%] lg:left-[50%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Self Check-In
              </span>
            </div>

            <div className="absolute top-25 left-[67%] lg:left-[65%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Pet friendly
              </span>
            </div>
          </motion.div>
        </div>

        <div className=" w-full flex justify-between mt-40 p-2 items-center lg:px-8">
          <div className="relative lg:w-[5rem] lg:h-25 w-[3rem] h-15">
            <Image
              src="/svg/rotate.svg"
              alt="rotateImage"
              fill
              priority
              className="object-contain "
            />
          </div>

          <p className="text-[0.6rem] text-black font-semibold leading-4 mt-6 lg:text-2xl lg:leading-8 lg:mt-10 lg:font-light ">
            Experience The Perfect Blend Of Comfort <br />
            Nature ,Crafted For Your Ultimate Escape
          </p>

          <div className="flex items-center flex-col justify-center">
            <h1 className="text-md lg:text-2xl">4.9</h1>
            <p className="text-[0.5rem] font-light lg:text-[1.2rem]">
              From 2400+ Reviews
            </p>
          </div>
        </div>
        <div className="w-full lg:flex items-center justify-center mt-2 hidden ">
          <BookingBar/>
        </div>
      </div>
    </section>
  );
}

export default Hero;