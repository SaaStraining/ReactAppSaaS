import React from "react";

const Confirmation = ({ prevStep, nextStep, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="w-5/6 border mt-28 mx-auto ">
      <div className="text-justify">
        <div className=" leading-10 w-5/6 mx-auto h-96 mt-5  overflow-x-hidden   ">
          <table className=" w-full rounded-2xl inset-x-0 top-0 h border-b align-middle">
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
            <tbody className=" align-middle h-96">
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
            </tr>
            <tr>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
              <td>ahah</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-5/6 mx-auto flex  justify-end  mt-32 border">
        <button
          className="w-36 px-3 py-2 text-white mr-4 border-primary bg-primary"
          onClick={Previous}
        >
          Retour
        </button>
        <button
          className="w-36 px-3 py-2 text-white mr-4 border-primary bg-primary"
          onClick={Continue}
        >
          Suivant
        </button>
        <button
          className="w-36 px-3 py-2 text-white mr-4 border-primary bg-primary"
          onClick={Continue}
        >
          Imprimer
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
