import React from "react";
import { Routes,Route } from "react-router-dom";
import AddHumanResource from "../componnents/HumanRessources/AddHumanResource";
import NavBar from "../componnents/NavBar";
import SideBar from "../componnents/SideBar";

function ControlPanel() {
  return (
    <div className="flex">
        <SideBar/>
        <div className="block w-4/5">
            <NavBar/>
            <Routes>
                <Route path="" element={<AddHumanResource/>} />
            </Routes>
        </div>
    </div>
  );
}

export default ControlPanel;
