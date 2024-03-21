import React from "react";

function PassCards({ website, username = "", email = "", password }) {
  return (
    <div className="bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 rounded-md overflow-hidden p-[1px] font-semibold text-xs">
      <div className="w-full py-3 px-5 rounded-md flex justify-between text-zinc-200 bg-zinc-950/90 backdrop-blur-md">
        <div className="px-2">{website}</div>
        <div className="px-2">{username}</div>
        <div className="px-2">{email}</div>
        <div className="px-2">
          {password}
          <span className="px-2">see/no-see</span>
        </div>
        <div className="px-2">copy</div>
      </div>
    </div>
  );
}

export default PassCards;
