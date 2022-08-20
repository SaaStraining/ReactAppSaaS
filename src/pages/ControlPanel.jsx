import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import AddHumanResource from "../components/HumanRessources/AddHumanResource";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import finIllus from "../assets/illustrations/illustration_finance.png";
import Delete from "../assets/icons/delete.png"
import "../pages/pages.css";
function ControlPanel() {
  const location = useLocation();
  const pathname = window.location.pathname;
  if (location.pathname === "/dashboard/") {
    return (
      <div className="flex ">
        <SideBar />

        <div className="block w-4/5 ">
          <NavBar />
          <div className="  mt-28 w-full border ">
            <div className="text-left font-bold w-5/6 mx-auto border ">
              Welcome John Doe !
              <p className="text-sm font-light">to your Admin Panel Dashboard</p>
            </div>
            <div className="flex justify-between w-5/6 my-10 mx-auto">
              <div className="w-6/12 border ">
                <div className="w-full"></div>
                <div className="w-full grid grid-cols-2 grid-rows-2 gap-3">
                  <div className="bg-redoy fin rounded-lg  text-white border text-xs h-28 p-3 ">
                    finance
                  </div>
                  <div className="rh rounded-lg bg-blueoy text-white border text-xs h-28 p-2 ">
                    R.Humain
                  </div>
                  <div className="prod rounded-lg bg-yelloy text-white border text-xs h-28 p-3 ">
                    Produits
                  </div>
                  <div className="dev rounded-lg bg-greenoy text-white border text-xs h-28 p-3   ">
                    Devis
                  </div>
                </div>
              </div>
              <div className="dash-notif w-5/12 shadow-md rounded border ">
                <div className="border-b grid grid-cols-4">
                    <div className="border bg-primary">new</div>
                    <div className="col-span-2">hello</div>
                    <button className="bg-delete"><img src={Delete} width="16px" alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
}

export default ControlPanel;
