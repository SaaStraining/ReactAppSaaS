import React, { Component } from "react";
import Confirmation from "../DevisForms/Confirmation";
import EntrepriseForm from "../DevisForms/EntrepriseForm";
import ProduitForm from "../DevisForms/ProduitForm";
import ServiceForm from "../DevisForms/ServiceForm";
import Successf from "../DevisForms/Success";

export default class hello extends Component {
  state = {
    step: 1,
    nom: "",
    libelleProd: "",
    nombreProd: 0,
    uniteProd: "",
    prixProdUnit: 0.0,
    libelleServ: "",
    nombreServ: 0,
    uniteServ: "",
    prixServUnit: 0.0,
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      nom,
      libelleProd,
      nombreProd,
      uniteProd,
      prixProdUnit,
      libelleServ,
      nombreServ,
      uniteServ,
      prixServUnit,
    } = this.state;
    const values = {
      nom,
      libelleProd,
      nombreProd,
      uniteProd,
      prixProdUnit,
      libelleServ,
      nombreServ,
      uniteServ,
      prixServUnit,
    };
    switch (step) {
      case 1:
        return (
          <EntrepriseForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <ProduitForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ServiceForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 5:
        return <Successf />;
      default:
      // do nothing
    }
  }
}
