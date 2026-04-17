"use client";
import { ArrowUpRight } from "lucide-react";

function Card() {
  return (
    <div className="flex flex-col gap-3 text-black p-2   rounded-2xl border-[2px] border-gray-300 shadow-md bg-white w-full ">
      <button className="w-fit px-2 py-1 border-2 border-black rounded-4xl">
        01
      </button>
      <h1 className="text-sm font-semibold text-gray-800">
        Residential property
      </h1>
      <p className="text-sm text-gray-600 font-light">
        Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. <br />
        Dolores atque et quia?
      </p>
      <button className="flex gap-2 bg-black/75 px-2 py-2 w-fit rounded-4xl text-white cursor-pointer">
        <span>view More </span>
        <ArrowUpRight />
      </button>
    </div>
  );
}

export default Card;
