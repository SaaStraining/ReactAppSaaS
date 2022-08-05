import React from "react";
import "../pages.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { axiosInstance } from '../../AxiosInstance/axios.instance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = (e) => {
      e.preventDefault();
      axiosInstance.post(
          '/admin/login',
          {
              email,
              password
          }
      ).then(res => {
        
          toast("Login avec succes", {
              type: toast.TYPE.SUCCESS,
              position: toast.POSITION.BOTTOM_CENTER
          });

          console.log(res.data)
      })
          .catch(error => {
              toast("Invalid credentials", {
                  type: toast.TYPE.ERROR,
                  position: toast.POSITION.BOTTOM_CENTER
              });
              setEmail("");
              setPassword("");
          })
  }


  return (
    <div className="Login-container w-full flex text-center">
            <ToastContainer />
      <div className="flex flex-col w-7/12  m-0   pt-5 ">
        <div className="flex justify-between mx-16 ">
          <a href="#" className="log_logo text-xl ">
            Logo
          </a>
          <Link
            to="#"
            className="log_ret  w-24  px-3 py-1 rounded-2xl border border-blue-500 hover:text-white"
          >
            Retour
          </Link>
        </div>
        <div className=" mt-40 mx-10 ">
          <div className=" leading-snug text-4xl mb-4">
            Bienvenue au <span style={{ color: "#319CFF" }}>TNM</span> Admin
            <br />
            Authentification.
          </div>
          <div className="form-container ">
            <form className="log_inner_form " onSubmit={loginAdmin}>
              <input
                type="text"
                className="log_login rounded-xl w-2/4 pl-20 h-14  mt-4 text-base "
                placeholder="Nom d'utilisateur..."
                name=""
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                id=""
              />
              <br />
              <input
                type="password"
                className="log_mdp rounded-xl w-2/4 pl-20 h-14 mt-4 text-base"
                placeholder="Mot de passe..."
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id=""
              />
              <br />
              <button
                type="submit"
                className="button-con-ad text-white mt-8 w-2/5 h-14 text-xl rounded-full  hover:shadow-none"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="login_admin_photo w-5/12  "></div>
    </div>
  );
}

export default AdminLogin;
