import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import {
  userCreatedScrapesQuery,
  userQuery,
  userSavedScrapesQuery,
} from "../utils/data";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const activeBtnStyles =
  "text-white font-bold p-2 rounded-full w-20 outline-none";
const notActiveBtnStyles =
  "mr-4 text-black font-bold p-2 rounded-full w-20 outline-none";

const UserProfile = () => {
  const [user, setUser] = useState();
  const [scrapes, setScrapes] = useState();
  const [text, setText] = useState("Created");
  const [activeBtn, setActiveBtn] = useState("created");
  const navigate = useNavigate();
  const { userId } = useParams();
  const [activeFooter, setActiveFooter] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    document.title = "About Comunce";
  }, []);

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

  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (text === "Created") {
      const createdScrapesQuery = userCreatedScrapesQuery(userId);

      client.fetch(createdScrapesQuery).then((data) => {
        setScrapes(data);
      });
    } else {
      const savedScrapesQuery = userSavedScrapesQuery(userId);

      client.fetch(savedScrapesQuery).then((data) => {
        setScrapes(data);
      });
    }
  }, [text, userId]);

  const logout = () => {
    localStorage.clear();

    navigate("/login");
  };


  useEffect(() => {
    document.title = "Profile | Comunce";
  }, []);

  if (!user) return <Spinner message="Loading profile" />;

  return (
    <div>
      {!activeFooter && (
        <div
          className=" flex "
          style={{
            padding: "10px",
            flexDirection: "row",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#0492c2",
              fontSize: "23px",
              paddingRight: "10px",
              fontWeight: "bold",
            }}
          >
            <BsArrowLeft />
          </Link>

          <div className="absolute  z-1 right-3 ">
            {userId === User.googleId && (
              <GoogleLogout
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    type="button"
                    className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <AiOutlineLogout color="#0492c2" fontSize={21} />
                  </button>
                )}
                onLogoutSuccess={logout}
                cookiePolicy="single_host_origin"
              />
            )}
          </div>
        </div>
      )}
      <div className="relative pb-2 h-full justify-center items-center">
        <div className="flex flex-col pb-5">
          <div className="relative flex flex-col mb-7">
            <div className="flex flex-col justify-center items-center">
              <img
                className="rounded-full w-100 h-100 mt-20 shadow-xl object-cover"
                src={user.image}
                alt="user-pic"
              />
            </div>
            <h1 className="font-bold text-3xl text-center mt-3">
              {user.userName}
            </h1>
            {activeFooter && (
              <div className="absolute top-0 z-1 right-0 p-2">
                {userId === User.googleId && (
                  <GoogleLogout
                    clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                    render={(renderProps) => (
                      <button
                        type="button"
                        className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <AiOutlineLogout color="#0492c2" fontSize={21} />
                      </button>
                    )}
                    onLogoutSuccess={logout}
                    cookiePolicy="single_host_origin"
                  />
                )}
              </div>
            )}
          </div>
          <div className="text-center mb-7">
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("created");
              }}
              style={{
                background: activeBtn === "created" ? "#0492c2" : "#ffffff",
              }}
              className={`${
                activeBtn === "created" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Created
            </button>
            <button
              type="button"
              onClick={(e) => {
                setText(e.target.textContent);
                setActiveBtn("saved");
              }}
              style={{
                background: activeBtn === "saved" ? "#0492c2" : "#ffffff",
              }}
              className={`${
                activeBtn === "saved" ? activeBtnStyles : notActiveBtnStyles
              }`}
            >
              Saved
            </button>
          </div>

          <div className="px-2">
            <MasonryLayout scrapes={scrapes} />
          </div>

          {scrapes?.length === 0 && (
            <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
              No Comutes found!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
