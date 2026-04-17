"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Card from "../ui/Card";
function OpportunitySection() {
  return (
    <div className="w-full bg-[#F3F3F3] p-2 flex justify-center items-center flex-col  gap-2">
      <div className="w-full flex flex-col bg-white rounded-2xl p-2 lg:flex-row  lg:justify-end-safe lg:w-[60%] border-[2px] border-gray-300">
        <div className="w-full flex flex-col text-black gap-2 lg:gap-3 bg-white  lg:w-[70%] lg:justify-center px-4 ">
          <p className="text-sm text-gray-600 uppercase font-semibold ">
            Opportunity
          </p>
          <h1 className="text-[2rem] font-semibold leading-10">
            Our investment <br /> opportunity for you
          </h1>
          <p className="text-[0.9rem] text-gray-500 font-medium leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quo
            atque totam nesciunt modi nam sapiente sed <br />
            maiores, itaque vitae quisquam.
          </p>

          <button className="px-3 py-3 bg-black text-white w-fit rounded-4xl flex gap-3 ">
            <span>request a call</span> <ArrowUpRight />
          </button>
        </div>
        <div className="lg:w-[20rem]">
          <Image
            src="/image/cardSection2.png"
            alt="cardSection"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex  gap-4 bg-white  rounded-2xl lg:flex-row lg:gap-2 lg:w-[60%] justify-between p-5  flex-col w-full">
        <Card bgColor="#D9BFFF" />

        <Card bgColor="#BEFCFF" />

        <Card bgColor="#D0FEBF" />
      </div>
    </div>
  );
}

export default OpportunitySection;
