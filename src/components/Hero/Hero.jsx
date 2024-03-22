import React from "react";
import PassCards from "../PassCards/PassCards";

function Hero() {
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col justify-center items-center gap-1">
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-5 tracking-tighter py-2">
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
      <div className="w-full h-1/2 overflow-hidden">
        <div className="w-full h-full gap-2 px-2 py-5 flex flex-col justify-start items-center overflow-y-scroll">
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
          <PassCards
            website={"www.google.com"}
            username={"Sagar01010"}
            email={"sagar@mail.com"}
            password={"******"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
