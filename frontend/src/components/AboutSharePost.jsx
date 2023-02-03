import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import NavbarHelp from "./NavbarHelp";
import { useNavigate } from "react-router-dom";

function AboutSharePost() {

    const [activeFooter, setActiveFooter] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const navigate = useNavigate();
  
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
  
    useEffect(() => {
      document.title = "How to Share your Comute? | Comunce";
   }, []); 
  
    const goToHelp = () => {
      navigate("/help");
    };
    return (
        <div>
          <NavbarHelp goback={goToHelp} name="How to Share Your Comute?" />
            <div>
              
              <p style={{color: '#0492c2'}} className="md:text-2xl text-xl md:pl-8 pl-4 pt-6 font-bold">
                Share your Comute in 3 easy steps:
              </p>
                {/* 1. Click on the Add Post Button which is on the top right corner
                in the home page.
  
                2. Click on the Click to upload button, select your image and upload it.
  
                3. Then fill out all the required fields like Title, Description, etc.
    
                4. Click on the Create button and that's all! Your Sketch is in the feed! */}
         
            </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div style={{backgroundColor: '#0492c2'}} className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                <AiOutlinePlus className="w-5 h-5" />
                  
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p className="leading-relaxed"> Click on the Add or Plus Button in the top right corner of the Home page OR Click on the 'Create' in the Sidebar Menu.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div style={{backgroundColor: '#0492c2'}}  className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                <GiClick className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p className="leading-relaxed">Again click on the large 'Click to Upload' label, select your image and upload it.</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div style={{backgroundColor: '#0492c2'}}  className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                <MdOutlineKeyboardAlt className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p className="leading-relaxed"> And fill up the all the fields given in order to give the details of the post.</p>
                </div>
              </div>
              <div className="flex relative">
                <div style={{backgroundColor: '#0492c2'}}  className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p className="leading-relaxed">And Its Done! Your Comute is shared among the smartest community. Congratulations!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
      );
}

export default AboutSharePost;
