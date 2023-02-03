import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHelp from "./NavbarHelp";

const Help = () => {

  useEffect(() => {
    document.title = "Help | Comunce";
 }, []);
  const navigate = useNavigate();

  const goTohome = () => {
    navigate("/");
  };
  const goToAbout = () => {
    navigate("/about");
  };
  const goToAboutPost = () => {
    navigate("/how-to-share-post");
  };

  return (
    <div>
      <NavbarHelp goback={goTohome} name="Help Centre"/>
      <div
        className="cursor-pointer pt-6"
        onClick={goToAbout}
      >
        <p className="text-xl pl-3 font-bold text-gray-600 pb-4">
          About Comunce
        </p>
      </div>
      <hr style={{ borderTop: "1px solid grey" }}></hr>
      <div
        className="cursor-pointer pt-6"
        onClick={goToAboutPost}
      >
        <p className="text-xl pl-3 font-bold text-gray-600 pb-4">
          How to Share your Comute?
        </p>
      </div>
      <hr style={{ borderTop: "1px solid grey" }}></hr>
    </div>
  );
};

export default Help;
