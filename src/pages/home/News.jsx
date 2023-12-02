import React from "react";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { image_url, details, _id, title } = news ??''

  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-5">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          {/* {
            details.length>100?<p>{details.slice(0,200)}</p>:<p>{details}</p>
          } */}

          {
            details?.length>200?<p>{details.slice(0,200)} <Link className="font-bold text-yellow-500" to={`/details/${_id}`}>Read More</Link></p>:<p>{details}</p>
          }
 
        </div>
      </div>
    </div>
  );
};

export default News;
