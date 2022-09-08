import React from "react";
import { Link } from "react-router-dom";
import Settings from "../assets/icons/settings.png";
import User from "../assets/icons/user_nav.png";
import Notification from "../assets/icons/notification.png";
import Mail from "../assets/icons/mail_open.png";
import Logout from "../assets/icons/log_out.png";
import "./components.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    width:'400px',
    background : '#F7F7F7',
    color : '#101115',
    top: '24%',
    left: 'auto',
    right: '5%',
    bottom: 'auto',
    marginRight: '-10%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding:'40px',

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
    subtitle.style.color = '#f00';
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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default NavBar;
