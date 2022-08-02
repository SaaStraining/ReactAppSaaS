import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
// import { Dropdown,Flowbite, DarkThemeToggle } from 'flowbite-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { Flowbite } from 'flowbite-react';
// import { DarkThemeToggle } from 'flowbite-react';
function SideBar() {
  const [toggle, setToggle] = useState(false);
  const [toggleSd, setToggleSd] = useState(false);
  const [toggleTd, setToggleTd] = useState(false);
  const ShowFst = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  const ShowSnd = (e) => {
    e.preventDefault();
    setToggleSd(!toggleSd);
  };
  const ShowTh = (e) => {
    e.preventDefault();
    setToggleTd(!toggleTd);
  };
  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "block",
  };
  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  };
  return (
    <aside className="w-1/5 side-nav h-screen overflow-y-auto pb-4  scrollbar-hide  dark:bg-gray-800 ">
      <div className="w-full m-0">
        <div className="side-header w-full grid place-items-center h-16 text-center  m-0 mb-4">
          <h3 className="m-0 text-white font-extrabold">LOGO</h3>
        </div>
        <div className="w-100 h-auto mb-11 text-white">
          <div className="flex flex-start pl-4 text-white ">
            <h3 className="">Ressources Humaines </h3>
            {toggle ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                className=" mt-1 text-white ml-3 "
                onClick={ShowFst}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" mt-1 text-white ml-3 "
                onClick={ShowFst}
              />
            )}
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
          
       {/* chanfge it just to see if it will be better  than the old version transition */}
            <Transition in={toggle} timeout={500} unmountOnExit>
              {(state) =>
                toggle ? (
                  <div
                    className="dropmenu  flex flex-col text-justify rounded-lg  justify-center w-100 mx-4 mt-2 h-auto mb-11 text-white"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <div className="flex pl-9 flex-col dropdown-links py-2">
                      <a href="#" className="block w-2/3 mb-1">
                        Liste des Employés
                      </a>
                      <Link to="rh" className="block  w-2/3 mb-1">Ajouter Employé </Link>
                      
                      <a href="#" className="block  w-2/3 mb-1">
                        Ajouter Rôles
                      </a>
                    </div>
                  </div>
                ) : null
              }
            </Transition>
        
        </div>
        <div className="w-100 h-auto mb-11 text-white">
          <div className="flex flex-start pl-4 text-white ">
            <h3 className="">Produits et Services </h3>
            {toggleSd ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                className=" mt-1 text-white ml-3 "
                onClick={ShowSnd}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" mt-1 text-white ml-3 "
                onClick={ShowSnd}
              />
            )}
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
          <div className="dropmenu  flex flex-col text-justify rounded-lg  justify-center w-100 mx-4 mt-2 h-auto mb-11 text-white">
            <Transition in={toggleSd} timeout={300}>
              {(state) =>
                toggleSd ? (
                  <div
                    className="flex pl-9 flex-col dropdown-links py-2"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <a href="#" className="block w-5/6 mb-1 ">
                     Historique Devis / Projet
                    </a>
                    <a href="#" className="block  w-5/6 mb-1">
                      Calcul Devis / Projet
                    </a>
                    <a href="#" className="block  w-5/6 mb-1">
                      Devis Réel par projet
                    </a>
                  </div>
                ) : null
              }
            </Transition>
          </div>
        </div>
        <div className="w-100 h-auto mb-11 text-white">
          <div className="flex flex-start pl-4 text-white ">
            <h3 className="">Statistiques </h3>
            {toggleTd ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                className=" mt-1 text-white ml-3 "
                onClick={ShowTh}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                className=" mt-1 text-white ml-3 "
                onClick={ShowTh}
              />
            )}
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" /> */}
          <div className="dropmenu  flex flex-col text-justify rounded-lg  justify-center w-100 mx-4 mt-2 h-auto mb-11 text-white">
            <Transition in={toggleTd} timeout={300}>
              {(state) =>
                toggleTd ? (
                  <div
                    className="flex pl-9 flex-col dropdown-links py-2"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <a href="#" className="block w-2/3 mb-1">
                      Achat et ventes Ex
                    </a>
                  
                  </div>
                ) : null
              }
            </Transition>
          </div>
        </div>
        
      </div>
    </aside>
  );
}

export default SideBar;
