import React, { useState, useEffect } from "react";
import logoBg from "../assets/about_bg.jpg";
import { useNavigate } from "react-router-dom";
import NavbarHelp from "./NavbarHelp";

const About = () => {
  const [activeFooter, setActiveFooter] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const navigate = useNavigate();

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

  var arrow = "~>";



  const goToHelp = () => {
    navigate("/help");
  };

  return (
    <div>
      <NavbarHelp goback={goToHelp} name="About Comunce"/>
      {activeFooter && (
        <div style={{ backgroundImage: `linear-gradient(to top left, #0492c2 100%, #ffffff 50%)`, margin: "auto" }}>
          <p className="text-gray-300"
            style={{
              fontSize: "25px",
              paddingLeft: "15px",
              paddingTop: "20px",
              fontWeight: "bold",
            }}
          >
            What is Comunce?
          </p>
          <div className=" flex " style={{ flexDirection: "row" }}>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Comunce is a Image Sharing Social Media Platform that offers you
              the opportunity to stock and share your favourite images. If you
              are someone who has a knack for photography or even who loves to
              write quotes, then Comunce is the perfect place for you. You can
              share skillful photographs, quotes, memes, and many more. We would
              love to welcome all informational and knowledgeable images.{" "}
            </p>
          </div>
          <div className=" flex " style={{ flexDirection: "row" }}>
            <p
              style={{
                fontSize: "18px",
                paddingLeft: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              The main purpose of developing this app is to remove the Bad
              Aspect from Social Media so that everyone can enjoy and use it for
              Good Cause. It is an enjoyable and useful platform for all users.{" "}
            </p>
          </div>
          <p className="text-gray-300"
            style={{
              fontSize: "25px",
              paddingLeft: "15px",
              paddingTop: "20px",
              fontWeight: "bold"
            }}
          >
            Why to use Comunce?
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {arrow} We don't use the User's data. Their data is safe with us. We
            value their privacy above all else.{" "}
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {arrow} We don't use data for any in-app advertisements.
          </p>
          <p
            style={{
              fontSize: "18px",
              paddingLeft: "20px",
              paddingTop: "20px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {arrow} We don't allow any inappropriate content. Users with any
            inappropriate content will be blocked.
          </p>
          <p className="text-gray-300"
            style={{
              fontSize: "19px",
              padding: "10px",
              fontWeight: "bold"
            }}
          >
             So Join the Smartest Community with Trust :)
          </p>
        </div>
      )}
      {!activeFooter && (
        <div
          style={{
            backgroundImage: `linear-gradient(to top left, #0492c2 100%, #ffffff 50%)`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" bg-blackOverlay">
            <p className="text-gray-300"
              style={{
                fontSize: "30px",
                paddingLeft: "10px",
                paddingTop: "40px",
                fontWeight: "bold"
              }}
            >
              What is Comunce?
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Comunce is a Image Sharing Social Media Platform that offers you
              the opportunity to stock and share your favourite images. If you
              are someone who has a knack for photography or even who loves to
              write quotes, then Comunce is the perfect place for you. You can
              share skillful photographs, quotes, memes, and many more. We would
              love to welcome all informational and knowledgeable images.{" "}
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingRight: "10px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              The main purpose of developing this app is to remove the Bad
              Aspect from Social Media so that everyone can enjoy and use it for
              Good Cause. It is an enjoyable and useful platform for all users.{" "}
            </p>
            <p className="text-gray-300"
              style={{
                fontSize: "30px",
                paddingLeft: "10px",
                paddingTop: "40px",
                fontWeight: "bold"
              }}
            >
              Why to use Comunce?
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't use the User's data. Their data is safe with us. We
              value their privacy above all else.{" "}
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't use data for any in-app advertisements.
            </p>
            <p
              style={{
                fontSize: "16px",
                paddingLeft: "15px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ~ We don't allow any inappropriate content. Users with any
              inappropriate content will be blocked.
            </p>
            <p
              style={{
                fontSize: "16px",
                padding: "8px",
                fontWeight: "bold",
                color: "#0492c2",
              }}
            >
              So Join the Smartest Community with Trust :)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
