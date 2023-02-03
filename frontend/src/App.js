import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Help, About, Welcome, SplashScreen, AboutSharePost } from "./components";
import Home from "./container/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="login*" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-to-share-post" element={<AboutSharePost />} />
      <Route path="/welcome-splash" element={<SplashScreen />} />
    </Routes>
  );
};

export default App;
