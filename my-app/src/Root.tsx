import React from "react";
import Router from "./Router";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;
