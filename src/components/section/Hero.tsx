"use client";
import Image from "next/image";
import Navbar from "../ui/Navbar";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className=" w-full h-screen overflow-hidden flex  items-center justify-center">
      <Image
        src="/image/hero.jpg"
        alt="Luxury Real Estate Hero"
        fill
        priority
        className="object-cover z-0 "
      />

      {/* Your content here */}
      <div className="relative z-10 flex flex-col w-[88%] h-[88%] border-4 border-white rounded-4xl">
        <Navbar />

        <div className="w-full flex justify-center items-center flex-col gap-2 text-center mt-3 ">
          <h1 className="text-[3rem] lg:text-[4.5rem] leading-[3.5rem] lg:leading-[4.5rem] font-md text-black">
            Find Your <br />
            Perfect <span className="text-[#F9F0A9]">Space</span>
          </h1>
          <p className=" text-[0.675rem] lg:text-sm leading-5 font-light text-gray-300">
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
            <div className="w-fit absolute top-25 left-5  lg:top-25 lg:left-[40%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Wi-Fi 100 Mbps
              </span>
            </div>

            <div className="absolute top-6 left-[35%] lg:left-[55%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Self Check-In
              </span>
            </div>

            <div className="absolute top-25 left-[70%] flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-[#F9F0A9] rotate-45" />
              <span className="text-white text-[13px] font-medium tracking-tight">
                Pet friendly
              </span>
            </div>
          </motion.div>
        </div>

        <div className=" w-full flex justify-between ">
          <div className="relative w-[4rem] h-20 ">
            <Image
              src="/svg/rotate.svg"
              alt="rotateImage"
              fill
              priority
              className="object-contain "
            />
          </div>

          <p>
            experience The Perfect Blend Of Comfort And <br />
            Nature ,Crafted For Your Ultimate Escape
          </p>

          <div>
            <h1>4.9</h1>
            <p>from 2400+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
