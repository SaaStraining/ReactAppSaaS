import React, { useState } from "react";
import profilePhoto from "../assets/images/user.png";
import realPhoto from "../assets/images/imageExample.png";
import "./pages.css";
const Account = () => {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    passwordCon:"",
  });
  const [check, setCheck] = useState(false)

  const handleDataChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData({ ...data, [name]: value });

    
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("onSubmit" + check)
  
  }
  return (
    <div className="w-5/6 mx-auto">
      <div className=" mb-10 ">
        <p className="text-left pb-3 font-bold mb-3">Gérer Votre Compte</p>
        <div className="flex   w-5/6 mx-auto  ">
          <div className="  ">
            <img src={realPhoto} className="w-48 h-auto rounded-md" alt="" />
          </div>
          <div className="text-xl text-left text-white bg-primary w-full ml-3 p-2 rounded-lg   ">
            <p className="text-justify">
              Bienvenue au panneau de configuration de votre profil
            </p>
            <p className=" text-lg ">Jhon Doe</p>
            <p className=" text-xs ">Directeur</p>
          </div>
        </div>
      </div>
      <div className="  mt-4 ">
        <div className=" border-b-2 w-1/3 mb-3 ml-3  ">
          <p className="ft-circular text-left ml-10 text-xl">
            Identifiants de Compte :
          </p>
        </div>
        <div className="  w-3/4 mx-auto ">
          <form action="" onSubmit={handleSubmit} className="w-4/5 mx-auto mb-4">
            <label className=" mb-4 ">
              <p className="text-left font-bold">Email :</p>
              <input
                type="email"
                name="email"
                onChange={handleDataChange}
                className=" w-full border-blueoy border-2 focus:outline-none   "
                placeholder="example@tnm.ma"
                id=""
              />
            </label>
            <div className="grid gap-3 grid-cols-2 mt-6   ">
              <label className=" ">
                <p className=" text-left font-bold ">Nom :</p>
                <input
                  type="text"
                  name="nom"
                  onChange={handleDataChange}
                  className=" w-full border-blueoy border-2 focus:outline-none  "
                  placeholder="Jhon"
                />
              </label>
              <label className="  ">
                <p className="text-left font-bold">Prénom :</p>
                <input
                  type="text"
                  name="prenom"
                  onChange={handleDataChange}
                  className=" w-full border-blueoy border-2 focus:outline-none  "
                  placeholder="Doe"
                />
              </label>
              <label className=" mb-4 ">
                <p className="text-left font-bold">Mot de Passe :</p>
                <input
                  type="password"
                  name="password"
                  onChange={handleDataChange}
                  className=" w-full border-blueoy border-2 focus:outline-none  "
                  placeholder="*****"
                />
              </label>
              <label className=" mb-4 h-24 ">
                <p className="text-left font-bold">Confirmation :</p>
                <input
                  type="password"
                  name="passwordCon"
                  onChange={handleDataChange}
                  className=" w-full border-blueoy border-2 focus:outline-none focus:border-blueoy "
                  placeholder="*****"
                  required
                />
                {
                data.password === data.passwordCon ? null: <p className="text-red-500 text-xs text-left ml-2 mt-1">confirmation de mot de passe incorrect </p>
                }
              </label>
            </div>
            <div>
              <input
                type="submit"
                value="Modifier"
                className=" ft-circular mt-6 h-10 border w-full bg-primary text-white text-lg font-bold "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
