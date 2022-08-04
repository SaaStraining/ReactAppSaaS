import React from "react";

function EditorLogin() {
  return (
    <div className="Login-container w-full flex text-center">
      <div className="flex flex-col w-7/12  m-0   pt-5 ">
        <div className="flex justify-between mx-16 ">
          <a href="#" className="log_logo text-xl ">
            Logo
          </a>
          <a
            href=""
            className="log_ret  w-24  px-3 py-1 rounded-2xl border border-blue-500 hover:text-white"
          >
            Retour
          </a>
        </div>
        <div className=" mt-40 mx-10 ">
          <div className=" leading-snug text-4xl mb-4">
            Bienvenue au <span style={{ color: "#319CFF" }}>TNM</span> Admin
            <br />
            Authentification.
          </div>
          <div className="form-container ">
            <form className="log_inner_form ">
              <input
                type="text"
                className="log_login rounded-xl w-2/4 pl-20 h-14  mt-4 text-base "
                placeholder="Nom d'utilisateur..."
                name=""
                id=""
              />
              <br />
              <input
                type="password"
                className="log_mdp rounded-xl w-2/4 pl-20 h-14 mt-4 text-base"
                placeholder="Mot de passe..."
                name=""
                id=""
              />
              <br />
              <button
                type="submit"
                className="text-white mt-8 w-2/5 h-14 text-xl rounded-full   hover:shadow-none"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="login_right w-5/12  "></div>
    </div>
  );
}

export default EditorLogin;
