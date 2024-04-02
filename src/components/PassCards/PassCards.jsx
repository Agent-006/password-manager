import React, { useRef, useState } from "react";

import { Eye, EyeOff, Copy } from "lucide-react";

function PassCards({ id, website, username = "", email = "", password }) {
  const [showPassword, setShowPassword] = useState(true);
  const ref = useRef(null);

  const copyToClipboard = () => {
    const text = ref.current.innerHTML;
    console.log(text);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  };

  return (
    <div
      key={id}
      className="w-full bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 rounded-md p-[1px] font-semibold text-xs"
    >
      <div className="w-full py-3 rounded-md flex justify-between text-zinc-200 bg-zinc-950/90 backdrop-blur-md">
        <div className="px-2 lg:px-5 md:px-5 w-1/5 overflow-x-hidden flex items-center">
          {website}
        </div>
        <div className="px-2 lg:px-5 md:px-5 w-1/5 overflow-x-hidden flex items-center">
          {username}
        </div>
        <div className="px-2 lg:px-5 md:px-5 w-1/5 overflow-x-hidden flex items-center">
          {email}
        </div>
        <div className="px-2 lg:px-5 md:px-5 w-1/5 flex items-center">
          {showPassword ? (
            <span>*******</span>
          ) : (
            <span ref={ref}>{password}</span>
          )}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="px-2 flex items-center cursor-pointer"
          >
            {showPassword ? <Eye height={18} /> : <EyeOff height={18} />}
          </span>
        </div>
        <div className="px-2 lg:px-5 md:px-5 flex items-center">
          <span onClick={copyToClipboard} className="cursor-pointer">
            <Copy height={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PassCards;
