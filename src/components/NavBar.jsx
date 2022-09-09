import React from "react";
import { Link } from "react-router-dom";
import Settings from "../assets/icons/settings.png";
import User from "../assets/icons/user_nav.png";
import Notification from "../assets/icons/notification.png";
import Mail from "../assets/icons/mail_open.png";
import Logout from "../assets/icons/log_out.png";
import close from "../assets/icons/closse.png";
import "./components.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "400px",
    background: "#F7F7F7",
    color: "#101115",
    top: "34%",
    left: "auto",
    right: "5%",
    bottom: "auto",
    marginRight: "-10%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    padding: "40px",
  },
};

function NavBar() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <button className="flex ml-3" onClick={openModal}>
          <img src={Notification} />
        </button>

        <a href="" className="flex ml-16">
          <img src={Logout} />
          <p className="ml-2">Déconnexion</p>
        </a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={Object.assign(customStyles, { overlay: { background: 'transparent' } })}
        
        >
        {/* Modal Header */}
        <div className=" flex justify-between mb-4 ">
          <p>Notification</p>
          <button onClick={closeModal}>
            <img src={close} alt="" />
          </button>
        </div>
        {/* Modal Body */}
        <div className=" h-64 overflow-scroll">
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className=" border-b  grid grid-cols-4 h-16">
            <div className="   p-0  w-2/3 mx-auto my-auto align-middle text-center text-white rounded-lg bg-gray-500">
              old
            </div>
            <div className="col-span-3 py-2   text-left">
              <p className="text-sm">zebdaoui a fini tout les gateaux</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
          </div>
          
        </div>
      </Modal>
    </div>
  );
}

export default NavBar;
