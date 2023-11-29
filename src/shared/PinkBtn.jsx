import React from "react";

const PinkBtn = ({ children }) => {
  return (
    <button className=" text-white bg-pink py-3 px-6 text-lg font-medium">
      {children}
    </button>
  );
};

export default PinkBtn;
