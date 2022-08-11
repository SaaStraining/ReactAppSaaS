import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import AddHumanResource from "../components/HumanRessources/AddHumanResource";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
 
function ControlPanel() {
  return (
    <div className="flex ">
      <SideBar />

      <div className="block w-4/5 ">
        <NavBar />
        <div className=" text-center mt-20  w-full ">
         
            <Outlet />
      
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
