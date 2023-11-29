import React from "react";
import Marquee from "react-fast-marquee";

import PinkBtn from "../../shared/PinkBtn";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="bg-gray-light p-4 my-7 flex">
      <PinkBtn>Latest</PinkBtn>
      <Marquee className="text-lg font-medium" pauseOnHover={true} speed={100}>
        <Link
          target="_blank"
          to={"/https://www.bbc.com/news/world-australia-67562532"}
        >
          Thalidomide: Australia gives national apology to survivors and
          families
        </Link>
        <Link
          target="_blank"
          to={"/https://www.bbc.com/news/world-europe-67495384"}
        >
          Russian actress killed in Ukrainian strike on event for troops
        </Link>
      </Marquee>
    </div>
  );
};

export default Slider;
