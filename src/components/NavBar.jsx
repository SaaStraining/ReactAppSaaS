import React from "react";
import { Link } from "react-router-dom";
import Settings from "../assets/icons/settings.png";
import User from "../assets/icons/user_nav.png";
import Notification from "../assets/icons/notification.png";
import Mail from "../assets/icons/mail_open.png";
import Logout from "../assets/icons/log_out.png";
import "./components.css";

function NavBar() {
  return (
    <div className="NavBar fixed  flex border-b-2  h-16 p-5 w-4/5 bg-white   ">
      <div className="w-8/12 flex">
        <a href="" className="flex ml-9">
          <img src={Settings} />
          <p className="ml-2">Paramétres</p>
        </a>
        <Link to="compte" className="flex ml-3">
          <img src={User} /> <p className="ml-2">Compte</p>
        </Link>

      
      </div>
      <div className="flex w-4/12 ml-52">
        <a href="" className="flex ml-3">
          <img src={Notification} />
        </a>

        <a href="" className="flex ml-16">
          <img src={Logout} />
          <p className="ml-2">Déconnexion</p>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
