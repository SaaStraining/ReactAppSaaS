
import React,{Component} from "react";
import AddIcon from "../../assets/icons/addicon.png";
import deleteIcon from "../../assets/icons/deleteicon.png";

class ProduitForm extends Component {

   Continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
   Previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

   deleteRow = e =>{
    e.preventDefault();
    console.log("deleted")
  }
   addRow = e =>{
    e.preventDefault();
    console.log("added")
  }
  render() {
    return (
      <div className="w-full">
      <div className="w-5/6 mx-auto  mt-24 mb-7 ">
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
            <button type="submit" onClick={this.addRow} className="  mt-11 ">
              <img src={AddIcon} alt="" className="" />
            </button>
          </div>
        </form>
      </div>
      <div className=" leading-10 w-5/6 mx-auto h-96 mt-5  overflow-x-hidden   ">
        <table className=" w-full rounded-2xl inset-x-0 top-0 h-96 border-b align-middle">
          <thead className=" bg-white sticky top-0">
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
          <tbody className="h-80 align-middle">
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td><button onClick={this.deleteRow}><img src={deleteIcon} alt="" /></button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" w-5/6 border flex flex-col  items-start justify-between  mt-10 mb-10 mx-auto ">
        <p className=" block text-sm mb-2 float-left">Total Ht produit (prévus): <span className="ml-4">{ 90454 + 12443497}</span> </p>
        <p className="block text-sm float-left ">Total des marges (prévus): <span className="ml-4">{200999 + 123838}</span> </p>
      </div>
      <br />
      <div className="w-5/6 mx-auto">
        <button onClick={this.Previous} className="float-left   w-36 rounded-md px-3 py-2 bg-gray-500 text-white">Retour</button>
        <button onClick={this.Continue} className="float-right  w-36 rounded-md px-3 py-2 bg-primary  text-white ">Suivant</button>
      </div>
    </div>
    )
  }
}

export default ProduitForm;
