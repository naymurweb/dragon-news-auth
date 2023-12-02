import React from "react";
import Header from "../../shared/Header";
import Slider from "./Slider";
import Navbar from "../../shared/Navbar";
import LeftSideNav from "./LeftSideNav";
import RightSideNav from "../../shared/RightSideNav";
import News from "./News";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div className="mt-12">
      <Header />
      <Slider />
      <Navbar />
      <div className="grid grid-cols-4 gap-5">
        <LeftSideNav/>
        <div className="col-span-2">{
          newsData.map(news=><News news={news} key={news._id}/>)
          
        }
            <News/>
        </div>
        <RightSideNav/>
      </div>
    </div>
  );
};

export default Home;
