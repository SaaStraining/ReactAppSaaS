import React from "react";
import AddIcon from "../../assets/icons/addicon.png";
import deleteIcon from "../../assets/icons/deleteicon.png";
const ProduitForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const deleteRow = e =>{
    e.preventDefault();
    console.log("deleted")
  }
  const addRow = e =>{
    e.preventDefault();
    console.log("added")
  }
  return (
    <div className="w-full">
      <div className="w-5/6 mx-auto  mt-24 mb-14">
        <form action="" className="flex mx-auto justify-around">
          <div className="w-56 mr-1 ">
            <label htmlFor="" className="block text-md font-light mb-4 float-left  ">
              Libelle:
            </label>
            <input
              type="text"
              className=" w-full h-10 rounded-md border-gray-300"
            />
          </div>
          <div className="w-32 mr-1">
            <label htmlFor="" className="block text-md font-light mb-4 float-left">
              Nombre:
            </label>
            <input
              type="number"
              className="w-full h-10  rounded-md border-gray-300 "
            />
          </div>
          <div className="w-24 mr-1">
            <label htmlFor="" className="block text-md font-light mb-4 float-left">
              Unite:
            </label>
            <select
              name=""
              id=""
              className="w-full h-10 rounded-md border-gray-300"
            >
              <option value="kg" className="  text-center mr-2">Kg</option>
              <option value="Cm" className="  text-center mr-2">Cm</option>
              <option value="unite" className=" text-center mr-2">Unite</option>
              <option value="unite" className=" text-center mr-2">m</option>
              
            </select>
          </div>
          <div className="w-44 mr-1">
            <label htmlFor="" className="block text-md font-light mb-4 float-left">
              Prix Unitaire:
            </label>
            <input
              type="number"
              className="w-full h-10 rounded-md border-gray-300"
            />
          </div>
          <div className="w-48 mr-1">
            <label htmlFor="" className="block text-md font-light mb-4 float-left">
              Marge des Produits:
            </label>
            <input
              type="number"
              className="w-full h-10 rounded-md border-gray-300"
            />
          </div>
          <div className="mr-1">
            <button type="submit" onClick={addRow} className="  mt-11 ">
              <img src={AddIcon} alt="" className="" />
            </button>
          </div>
        </form>
      </div>
      <div className="w-5/6 mx-auto mb-14 h-3/5 border">
        <table className=" table-auto border-spacing-2 w-full h-full">
          <thead>
          <tr>
            <th>id</th>
            <th>Libelle</th>
            <th>Nombre</th>
            <th>Unite</th>
            <th>prix Unité</th>
            <th>prix Total/unite</th>
            <th>Marge</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" w-full">calculated:</div>
      <div>
        <button onClick={Previous}>Retour</button>
        <button onClick={Continue}>Suivant</button>
      </div>
    </div>
  );
};

export default ProduitForm;
