import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feed,
  ScrapeDetail,
  CreateScrape,
  Search,
} from "../components";

const Scrapes = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-2 md:px-5">
      <div className="overflow-y-auto z-1 ">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className="h-full pt-2">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          
          {/* <Route
            path="/create-comutes"
            element={<CreateScrape user={user && user} />}
          /> */}
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Scrapes;
