import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AddHumanResource from "../componnents/HumanRessources/AddHumanResource";
import NavBar from "../componnents/NavBar";
import SideBar from "../componnents/SideBar";

function ControlPanel() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="block w-4/5 ml-72   ">
        <NavBar />
        <div className=" text-center mt-20  ">
          <div className="overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;