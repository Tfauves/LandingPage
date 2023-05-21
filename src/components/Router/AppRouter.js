import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Section from "../Section";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Section />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
