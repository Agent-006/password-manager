import React from "react";
import PassCards from "../PassCards/PassCards";

function Hero() {
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-5 tracking-tighter">
        <h1 className="text-5xl font-bold text-gray-200">Keep your password</h1>

        <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 bg-clip-text text-transparent">
          PassArmor
        </h1>
        <button className="bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 rounded-md px-[2px] hover:py-[.5px] duration-500">
          <div className="h-full w-full bg-zinc-950 text-gray-200 px-4 py-1 rounded-md font-semibold text-sm">
            Add password
          </div>
        </button>
      </div>
      <div className="w-full h-96 gap-2 flex flex-col">
        <PassCards
          website={"www.google.com"}
          username={"Sagar01010"}
          email={"sagar@mail.com"}
          password={"******"}
        />
      </div>
    </div>
  );
}

export default Hero;
