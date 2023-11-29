import React from "react";
import logo from "../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center my-5">
        <img src={logo} alt="" />
      </div>
      <p className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg font-medium">
        {moment().format("dddd" + ", " + "MMMM, YYYY")}
      </p>
    </div>
  );
};

export default Header;
