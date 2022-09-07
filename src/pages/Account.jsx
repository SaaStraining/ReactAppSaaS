import React from "react";
import profilePhoto from "../assets/images/user.png";
import realPhoto from "../assets/images/imageExample.png";
import "./pages.css";
const Account = () => {
    const passwordCheck = (e) =>{
        
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
      <div className="  mt-4 " >
        <div className=" border-b-2 w-1/3 mb-3 ml-3  ">
          <p className="ft-circular text-left ml-10 text-xl">
            Identifiants de Compte :
          </p>
        </div>
        <div className="  w-3/4 mx-auto ">
            <form action="" className="w-4/5 mx-auto mb-4">
              <label className=" mb-4 ">
                <p className="text-left font-bold">Email :</p>
                <input type="email" name="email" className=" w-full border-blueoy border-2 place " placeholder="example@tnm.ma"  id="" />
              </label>
              <div className="grid gap-3 grid-cols-2 mt-6   ">
                    <label className=" ">
                      <p className=" text-left font-bold ">Nom :</p> 
                        <input type="text" className=" w-full border-blueoy border-2 place " placeholder="Jhon" />
                    </label>
                    <label className="  ">
                        <p className="text-left font-bold">Prénom :</p>
                        <input type="text" className=" w-full border-blueoy border-2 place " placeholder="Doe" />
                    </label>
                    <label className=" mb-4 ">
                        <p className="text-left font-bold">Mot de Passe :</p>
                        <input type="password" className=" w-full border-blueoy border-2 place " placeholder="*****" />
                    </label>
                    <label className=" mb-4 ">
                        <p className="text-left font-bold">Confirmation :</p>
                        <input type="password" className=" w-full border-blueoy border-2 place " placeholder="*****" />
                    </label>
              </div>
              <div>
                <input type="submit" value="Modifier" className=" ft-circular mt-6 h-10 border w-full bg-primary text-white text-lg font-bold " />
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Account;
