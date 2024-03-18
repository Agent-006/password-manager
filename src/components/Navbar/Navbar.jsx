import React from "react";

function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur-md border-b-[1px] border-gray-800 h-12 flex justify-between items-center px-4 text-gray-200">
      <div className="logo font-bold bg-gradient-to-r from-rose-400 from-10% via-rose-600 via-40% to-purple-600 bg-clip-text text-transparent text-xl">
        PassArmor
      </div>
      <div>profile</div>
    </nav>
  );
}

export default Navbar;
