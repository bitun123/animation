"use client";
import Image from "next/image";
import { motion } from "framer-motion";
function CardSection() {
  return (
    <div className="w-full bg-[#EFEEF1] flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-[2.5rem] font-bold text-black leading-12 tracking-1 lg:text-[4rem] lg:leading-14">
          Investment in <br />
          real estate
        </h1>
        <p className="text-gray-600 text-sm  leading-5 font-light lg:text-base lg:leading-6">
          Attractive location close to business <br />
          center Provides guaranteed rental .
        </p>
        <Image
          src="/svg/cardRotate.svg"
          alt="Luxury Real Estate Hero"
          width={120}
          height={120}
          className="object-cover mt-4"
          />
      </div>
      <div className="relative">
        <Image
          src="/image/cardimage.png"
          alt="Luxury Real Estate Hero"
          width={500}
          height={300}
          className="object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute -bottom-9 lg:-bottom-12 lg:-left-12">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [4, -0.5, 4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/image/cardSection1.png"
              alt="Luxury Real Estate Hero"
              width={150}
              height={150}
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
        <div className="absolute -top-7 right-0 lg:-top-12 lg:-right-10">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [4, -0.5, 4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/image/cardSection2.png"
              alt="Luxury Real Estate Hero"
              width={150}
              height={150}
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
