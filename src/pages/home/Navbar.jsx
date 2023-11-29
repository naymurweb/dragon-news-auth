import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../assets/user.png";
import PinkBtn from "../../shared/PinkBtn";

const Navbar = () => {
  const linkItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {linkItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center">
            <div>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                  <img src={user} />
                </div>
              </div>
            </div>
            <button className=" text-white bg-gray-dark py-3 px-8 text-lg font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
