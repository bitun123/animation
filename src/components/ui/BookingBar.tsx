"use client";
import React from "react";
import { Home, Calendar, Users, ChevronDown } from "lucide-react";

const BookingBar = () => {
  return (
    <div className="w-[70%] h-3">
      <div className="h-[4rem] bg-white rounded-full shadow-xl border border-gray-100  md:p-3 flex flex-col md:flex-row items-center gap-2 md:gap-0">
        {/* Room Selection */}
        <div className="flex-1 flex items-center gap-3 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-100 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <Home className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-bold text-gray-900">Room</span>
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm text-gray-500">Pine Log</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Check-in */}
        <div className="flex-1 flex items-center gap-3 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-100 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-bold text-gray-900">Check-in</span>
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm text-gray-500">15 Mar 2025</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Check-out */}
        <div className="flex-1 flex items-center gap-3 px-6 py-2 border-b md:border-b-0 md:border-r border-gray-100 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col flex-1   ">
            <span className="text-sm  font-bold text-gray-900">Check-out</span>
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm text-gray-500">30 Mar 2025</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Guests */}
        <div className="">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col flex-1"></div>
        </div>

        {/* Action Button */}
        <button className="md:hidden lg:block w-full md:w-auto px-8 py-3 bg-[#F9F0A9] hover:bg-[#f2e68a] text-black font-bold rounded-full transition-all duration-300 whitespace-nowrap md:ml-2">
          Book Your Stay
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
