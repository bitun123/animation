"use client";
import { AlignCenterHorizontal, ArrowUpRight } from "lucide-react";
import { Users } from 'lucide-react';
import { MessageCircleDashed } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { Vegan } from 'lucide-react';

function FooterSection() {
  return (
    <div className="w-full bg-[#1D2532] p-5 flex flex-col gap-10 lg:gap-5 lg:flex-row lg:justify-around">
      <div className="flex flex-col gap-2">
        <h1 className="flex gap-2 text-gray-300 font-light text-xl items-center">
          <AlignCenterHorizontal />
          <span>prolnvest</span>
        </h1>
        <p className="text-sm text-gray-300 font-light tracking-1">
          Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit.{" "}
          <br /> Est sed sequi delectus?
        </p>
        <h1 className="text-xl font-semibold text-white">
          Subscribe Our newsletter
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white px-2 py-2 rounded-4xl w-fit "
        />
        <button className="px-14 py-2 bg-[#92EF90] w-fit rounded-4xl flex gap-2 items-center cursor-pointer active:scale-95 transition-transform duration-300">
          <span>Subscribe</span> <ArrowUpRight />
        </button>
      </div>
      <div className="flex flex-col p-2 border-t-[2px] lg:border-l-[2px] lg:border-t-0 border-gray-300 justify-center items-start gap-4">
        <h1 className="text-xl text-white font-semibold ">About</h1>
        <ul className="flex flex-col text-gray-400 font-extralight ">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex flex-col p-2 border-t-[2px] lg:border-l-[2px] lg:border-t-0 border-gray-300 justify-center items-start gap-4">
        <h1 className="text-xl text-white font-semibold ">Investment</h1>
        <ul className="flex flex-col text-gray-400 font-extralight ">
          <li>FAQS</li>
          <li>HOW WORKS </li>
          <li>PROGRAMMING</li>
        </ul>
      </div>


      <div className="flex flex-col p-2 border-t-[2px] lg:border-l-[2px] lg:border-t-0 border-gray-300 justify-center items-start gap-4">
        <h1 className="text-xl text-white font-semibold ">Investment</h1>
        <ul className="flex flex-col text-gray-400 font-extralight ">
          <li>FAQS</li>
          <li>HOW WORKS </li>
          <li>PROGRAMMING</li>
        </ul>
        <ul className="flex gap-2 justify-around ">
            <li className="px-1 py-1 text-white hover:bg-[#92EF90] rounded-4xl"><Users /></li>
            <li className="px-1 py-1 text-white hover:bg-[#92EF90] rounded-4xl"><MessageCircleDashed /></li>
            <li className="px-1 py-1 text-white hover:bg-[#92EF90] rounded-4xl"><StickyNote /></li>
            <li className="px-1 py-1 text-white hover:bg-[#92EF90] rounded-4xl"><Vegan /></li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;
