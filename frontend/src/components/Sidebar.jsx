import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiInformationFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import logo from "../assets/logo.png";
import { categories } from "../utils/data";
import { BiCategory, } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ closeToggle, user }) => {
  const [activeFooter, setActiveFooter] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveFooter(false);
    } else {
      setActiveFooter(true);
    }
  }, [screenSize]);

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar z-50 shadow-2xl">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex pr-5 pl-1 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiTwotoneHome />
            Home
          </NavLink>
          <NavLink
            to="/create-comutes"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <IoMdAddCircle />
            Create 
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiInformationFill />
            Help
          </NavLink>
          
          <h3
            style={{ color: "#0492c2" }}
            className="mt-2 px-5 font-bold text-base 2xl:text-xl"
          >
            Comute Categories
          </h3>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              {/* <img
                src={category.image}
                className="w-8 h-8 rounded-full shadow-sm"
                alt="Category"
              /> */}
              <BiCategory fontSize={25} />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full border-2"
            alt="user-profile"
          />
          <p style={{ color: "#0492c2" }} className="font-bold">
            Profile
          </p>
          <IoIosArrowForward color="#0492c2" />
        </Link>
      )}
      <span style={{ fontSize: "14px", fontWeight: "bold", color:'#0492c2'}} className="px-3 pb-3 bg-white">
        {" "}© 2022 | All rights reserved{" "}
      </span>
    </div>
  );
};

export default Sidebar;
