import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MdDownloadForOffline } from "react-icons/md";
import { AiTwotoneDelete, AiOutlineComment, AiFillSave, AiOutlineSave } from "react-icons/ai";
import { client, urlFor } from "../client";
import { scrapeDetailMoreScrapeQuery, scrapeDetailQuery } from "../utils/data";

const Scrape = ({ scrape }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [scrapeDetail, setScrapeDetail] = useState();
  const [compScreen, setCompScreen] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setCompScreen(false);
      setPostHovered(true);
    } else {
      setCompScreen(true);
      setPostHovered(false);
    }

  }, [screenSize]);

  const navigate = useNavigate();

  const { postedBy, image, _id,  caption } = scrape;

  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const deleteScrape = (id) => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  };
  // const deleteSave= (id) => {
  //   client
  //   .delete()

  //     .delete(id)
  //     .then(() => {
  //       window.location.reload();
  //     });
  // };

  let alreadySaved = scrape?.save?.filter(
    (item) => item?.postedBy?._id === user?.googleId
  );

  alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];

  const saveScrape = (id) => {
    if (alreadySaved?.length === 0) {
      setSavingPost(true);

      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert("after", "save[-1]", [
          {
            _key: uuidv4(),
            userId: user?.googleId,
            postedBy: {
              _type: "postedBy",
              _ref: user?.googleId,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload();
          setSavingPost(false);
        });
    }
  }
  
  const goToCategory = () => {
    navigate(`/comute-detail/${_id}`)
  };

  return (
    <div className="m-2 rounded-lg p-2 z-100 border-2 shadow-sm">

      <div
        onContextMenu={(e) => e.preventDefault()}
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/comute-detail/${_id}`)}
        className=" relative cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <img
          onContextMenu={(e) => e.preventDefault()}
          className="rounded-lg w-full border-2"
	
          src={urlFor(image).width(250).url()}
          alt="user-post"
        />
        {postHovered && (
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="absolute top-0  w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 "
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`${image?.asset?.url}?dl=`}
                  download
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-white w-20 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
			  
			  {!postedBy?._id === user?.googleId && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteScrape(_id);
                  }}
                  className="bg-white p-2 rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100 outline-none"
                >
                  <AiTwotoneDelete />
                </button>
              )}
              
            </div>
            <div className=" flex justify-between items-center gap-2 w-full">
                



			            <a
                    href={goToCategory}
                    className="bg-white flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md"
                    rel="noreferrer"
                  >
                    {' '}
                    <AiOutlineComment />
                </a> 
              
			  {alreadySaved?.length !== 0 ? (
                <button
			
                  type="button"
                  style={{ background: "#0492c2" }}
                  className=" opacity-70 hover:opacity-100  text-white font-bold px-5 py-1 flex text-base rounded-3xl hover:shadow-md outline-none"
                >
                  {scrape?.save?.length} <AiFillSave className="mt-1 ml-1"/>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    saveScrape(_id);
                  }}
                  type="button"
                  style={{ color: "#0492c2"}}
                  className="opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md bg-white outline-none opacity-75 "
                >
                  {scrape?.save?.length} {savingPost ? <AiFillSave/> : <AiOutlineSave/>}
                </button>
              )}
			  
            </div>
          </div>
        )}
      </div>
      <p className=" capitalize text-sm mt-2"> {caption?.slice(0, 80)} <Link style={{color: '#0492c2'}} to={`/comute-detail/${_id}`}>...see more</Link></p>
      {/* TODO: 65 Chars */}
      <Link
        to={`/user-profile/${postedBy?._id}`}
        className="flex gap-2 mt-2 items-center mb-2 rounded-lg p-1"
      >
        <img
          className="w-8 h-8 rounded-full object-cover border-2 "
		 
          src={postedBy?.image}
          alt="user-profile"
        />
        <p className="font-semibold capitalize">{postedBy?.userName}</p>
      </Link>
    </div>
  );
};

export default Scrape;
