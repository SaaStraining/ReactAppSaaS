import React, { Component } from "react";
import "../components.css";
import { Link } from "react-router-dom";
import Preview from "../../assets/icons/preview.png";
import Update from "../../assets/icons/update.png";
import Delete from "../../assets/icons/delete.png";
import { axiosInstance } from "../../AxiosInstance/axios.instance";
import { ToastContainer, toast } from "react-toastify";
export default class ListEmp extends Component {
  state = {
    searchTerm: "",
    employes: [],
  };
  componentDidMount() {
    axiosInstance
      .get("/employe/get")
      .then((res) => {
        this.setState({ employes: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate() {
    console.log("component updated !!")
  }

  render() {
    return (
      <div className="ListeEntreprise block pt-7 w-11/12  mx-auto">
        <div className="w-4/5 font-semibold ">
          <h1 className="-ml-72 underline decoration-primary text-lg">
            Liste des Employées :
          </h1>
        </div>
        <div className="ListeEts block">
          <div className="mt-11 flex">
            <div className=" w-3/4  relative">
              <div className="cent_in ">
                <label className="h-12 cent_lab">
                  Rechercher par Nom : &nbsp;
                </label>
              </div>
              <input
                type="text"
                className="inp_search bg-inputsec border-none rounded-md h-11 w-72"
                placeholder="Nom/Raison social ..."
                name="search-entreprise"
                onChange={(e) => {
                  this.setState({ employes: e.target.value });
                }}
              />
            </div>
            <div className="w-1/4">
              <Link to="/">
                <button className="bg-blueprim border-none text-white w-full h-full rounded-lg">
                  Ajouter un Employé &nbsp;+
                </button>
              </Link>
            </div>
          </div>
          <br />
          <div className="tab_ents h-96 mt-7 rounded-2xl overflow-x-hidden scrollbar-hide w-full">
            <table className="w-full  rounded-2xl inset-x-0 top-0 h-96 border-b align-middle">
              <thead className="rounded-2xl sticky top-0">
                <tr>
                  <td>Id</td>
                  <td>CIN</td>
                  <td>Statut</td>
                  <td>Nom</td>
                  <td>Prenom</td>
                  <td>Email</td>
                  <td>Tel</td>
                  <td>Adresse</td>
                  <td>Sb</td>
                  <td>Cs</td>
                  <td>Sn</td>
                  {/* we can use just one salary net or brut */}
                  <td>Preview</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody className="h-96  align-middle	">
                {this.state.employes
                  .filter((val) => {
                    if (this.state.searchTerm === "") {
                      return val;
                    } else if (
                      val.nom
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((emps) => {
                    return (
                      <tr className="border-b text-sm">
                        <td className="">E00{emps.id}</td>
                        <td>{emps.cin}</td>
                        <td>{emps.statut}</td>
                        <td>{emps.nom}</td>
                        <td>{emps.prenom}</td>
                        <td>{emps.mail}</td>
                        <td>{emps.tel}</td>
                        <td>{emps.addresse}</td>
                        <td>{emps.sb}</td>
                        <td>{emps.cs}</td>
                        <td>{emps.sn}</td>
                        <td className="align-middle	">
                          <button>
                            <img
                              src={Preview}
                              width="35px"
                              className=""
                              alt=""
                            />
                          </button>
                        </td>
                        <td className="align-middle	 text-white">
                          <div className="flex">
                            <button className="update w-8  h-8 text-center bg-update p-0 align-middle items-center justify-center content-center text-xs flex mr-3 ml-3 rounded-lg">
                             <img src={Update} alt="" />
                            </button>
                            <button
                              className="delete bg-delete w-8 h-8 p-0 align-middle items-center justify-center content-center text-center rounded-lg flex"
                              onClick={(e) => {
                                axiosInstance
                                  .delete("/employe/delete/" + emps.id)
                                  .then((res) => {
                                    this.setState({
                                      employes: this.state.employes.filter(
                                        (d) => d.id !== emps.id
                                      ),
                                    });
                                    toast("Employé supprimé avec succès", {
                                      type: toast.TYPE.WARNING,
                                      position: toast.POSITION.BOTTOM_CENTER,
                                    });
                                  });
                              }}
                            >
                              <img src={Delete} width="16px" alt="" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
