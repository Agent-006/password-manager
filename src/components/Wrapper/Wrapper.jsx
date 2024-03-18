import React from "react";

function Wrapper({ children }) {
  return (
    <div className="w-full h-[calc(100vh-3rem)] bg-transparent">{children}</div>
  );
}

export default Wrapper;
