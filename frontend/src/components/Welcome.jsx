import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";
import { RiHomeFill } from "react-icons/ri";

import { client } from "../client";

function Welcome({ user }) {
  const navigate = useNavigate();
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

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  const goToHelp = () => {
    navigate("/help");
  };

  const goTohome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        {activeFooter && (
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full h-full object-cover"
          ></div>
        )}
        {!activeFooter && (
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="w-full h-full object-cover"
          ></div>
        )}
        <div className="absolute flex flex-col  justify-center items-center top-0 right-0 left-0 bottom-0">
          {activeFooter && (
            <div
              style={{
                backgroundImage: `linear-gradient(to top left, #0492c2 100%, #ffffff 50%)`,
                width: 550,
                height: 400,
                borderRadius: 20,
              }}
              className=" flex justify-between items-center p-3 rounded-lg cursor-pointer shadow-2xl outline-none"
            >
              <div className="p-5 items-centre  ">
                <p
                  className="font-bold pb-1"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Welcome Dear,
                </p>
                <p
                  className="font-bold"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  To the Smartest Community!
                </p>
                <p
                  className="font-bold"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  Discover different knowledgeable
                </p>
                <p
                  className="font-bold pb-5"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  and Insightful Images!
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <button
                  type="button"
                  style={{
                    borderColor: "white",
                    borderWidth: "4px",
                    borderRadius: "15px",
                    background: "none",
                  }}
                  className=" flex justify-center items-center p-2 cursor-pointer outline-none"
                  onClick={goTohome}
                  disabled=""
                >
                  <RiHomeFill color="white" className="mr-2" />{" "}
                  <span className="font-bold" style={{ color: "white" }}>
                    Continue to Feed
                  </span>
                </button>

                <button
                  type="button"
                  style={{ background: "none" }}
                  className="flex justify-center items-center px-3 pt-4 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goToHelp}
                >
                  <span className="font-bold" style={{ color: "white" }}>
                    Need Help? Click here!
                  </span>
                </button>
              </div>
            </div>
          )}
          {!activeFooter && (
            <div
              style={{
                padding: "35px",
				paddingLeft: "50px",
                backgroundImage: `linear-gradient(to top left, #0492c2 100%, #ffffff 50%)`,
                borderRadius: "20px",
              }}
              className="shadow-2xl"
            >
              <div className="flex flex-col justify-center items-center">
                <p
                  className="font-bold pb-1"
                  style={{ color: "white", fontSize: "25px" }}
                >
                  Welcome Dear,
                </p>
                <p
                  className="font-bold"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  To the Smartest Community!
                </p>
                <p
                  className="font-bold"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  Discover different knowledgeable
                </p>
                <p
                  className="font-bold pb-5"
                  style={{ color: "white", fontSize: "13px" }}
                >
                  and Insightful Images!
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <button
                  type="button"
                  style={{ backgroundColor: "white", borderRadius: "15px" }}
                  className=" flex justify-center items-center p-2 mt-10 cursor-pointer outline-none"
                  onClick={goTohome}
                  disabled=""
                >
                  <RiHomeFill color="#0492c2" className="mr-2" />{" "}
                  <span className="font-bold" style={{ color: "#0492c2" }}>
                    Continue to Feed
                  </span>
                </button>

                <button
                  type="button"
                  style={{ background: "none" }}
                  className="flex justify-center items-center px-3 pt-3 p-2 rounded-lg cursor-pointer outline-none"
                  onClick={goToHelp}
                >
                  <span className="font-bold" style={{ color: "white" }}>
                    Need Help? Click Here
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
