import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Landing";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
