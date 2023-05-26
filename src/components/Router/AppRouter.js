import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Landing from "../Landing";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
