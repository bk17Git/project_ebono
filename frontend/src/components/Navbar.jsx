import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle, IoMdSearch } from "react-icons/io";


const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex gap-2 md:gap-2 w-full mt-5 pb-2  z-50 ">
        <div className="flex justify-start items-center w-full px-2 rounded-md  border-2 outline-none focus-within:shadow-sm">
          <IoMdSearch color="#0492c2" fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Comutes"
            value={searchTerm}
            onFocus={() => navigate("/search")}
            className="p-2 w-full outline-none"
          />
        </div>
        <div className="flex gap-3 ">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img
              src={user.image}
              alt="user-pic"
              className="w-14 h-12 rounded-full "
            />
          </Link>
          <Link
            to="/create-comutes"
            
            className=" text-white  w-12 h-10 md:w-14 md:h-12 flex justify-center items-center "
          >
            <IoMdAddCircle fontSize={50} color="#0492c2" />
          </Link>
        </div>
        <hr></hr>
      </div>
    );
  }

  return null;
};

export default Navbar;
