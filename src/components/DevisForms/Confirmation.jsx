import React from "react";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import user from '../../assets/images/user.png'
import { useState, useEffect } from "react";
import { axiosInstance } from "../../AxiosInstance/axios.instance";

const Confirmation = ({ prevStep, nextStep, values }) => {
  const [entreprise, setEntreprise] = useState([]);
  useEffect(() => {
    axiosInstance.get('/entreprise/get')
      .then(res => {
          setEntreprise(res.data);
          console.log(res.data);
      })
      .catch(err => {
          console.log(err);
      });
  }, []);
 
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  function generate() {
    var base64 = require('base-64');

  var doc = new jsPDF();
  var imgData = "data:image/png;base64,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";
  

  doc.text("TeDDDDDDst",20,10)
  doc.addImage(imgData,0,30,50,50)
  doc.text("2222222",40,50)

  doc.autoTable({
    html: '#mytable',
    theme : 'grid',
    startY : 140,
    bodyStyles: {minCellHeight: 15},
    didDrawCell: function(data) {
      if (data.column.index === 5 && data.cell.section === 'body') {
        var td = data.cell.raw;
        var img = td.getElementsByTagName('img')[0];
        var dim = data.cell.height - data.cell.padding('vertical');
        var textPos = data.cell.textPos;
      }
    }
  });

  doc.save("table.pdf");
  }
  return (
    <div className="w-5/6 border mt-28 mx-auto ">
      <button onClick={generate}>Generate PDF</button>

<table id="mytable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Entreprise</th>
   
    </tr>
  </thead>
  <tbody>
  {
    entreprise.map( et => {
      return(
        <tr>
          <td >{et.id}</td>
          <td >{et.nom}</td>
        </tr>
        )
    })
  }




  </tbody>
</table>
      {/* <div className="text-justify">
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
         
        >
          Imprimer
        </button>
      </div> */}
    </div>
  );
};

export default Confirmation;
