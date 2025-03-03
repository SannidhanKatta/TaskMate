"use client";

import { SignOutButton } from "@clerk/nextjs";
import { PowerIcon } from "@heroicons/react/24/outline";
import useStore from "@/context/store";

export default function MobileMessage() {
  const darkMode = useStore((state) => state?.darkMode ?? false);
  
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 ${darkMode ? 'bg-[#20212C] text-white' : 'bg-[#F4F7FD] text-slate-800'}`}>
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">Desktop Only</h1>
        <p className="text-sm">
          This Taskmate board is optimized for desktop use only. Please access it from a larger screen. But we will try to make it available soon.
        </p>
      </div>
      
      <button className={`flex h-[48px] w-full max-w-[200px] items-center justify-center gap-2 ${
        darkMode 
          ? 'text-[#828FA3] bg-[#2B2C37] hover:bg-[#3E3F4E] border-[#3E3F4E]' 
          : 'text-default bg-white hover:bg-indigo-100 hover:text-indigo-600 border-kgray-border'
      } rounded-md p-3 text-sm font-medium border-2`}>
        <PowerIcon className="w-6" />
        <div className="block">
          <SignOutButton />
        </div>
      </button>
    </div>
  );
} 