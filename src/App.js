// import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ControlPanel from "./pages/ControlPanel";
import AddHumanResource from "./components/HumanRessources/AddHumanResource";
import ListEmp from "./components/HumanRessources/ListEmp";
import AddCompte from "./components/HumanRessources/AddCompte";
import NotFound from "./pages/NotFound";
import RealDevis from "./components/prodServ/RealDevis";
import HistoriqueDP from "./components/prodServ/HistoriqueDP";
import StatisPage from "./components/Statistique/StatisPage";
import AdminLogin from "./pages/Logins/AdminLogin";
import EditorLogin from "./pages/Logins/EditorLogin";
import VisitorLogin from "./pages/Logins/VisitorLogin";
import ListeEntreprise from "./components/Entreprise/ListeEntreprise";
import AjoutEntreprise from "./components/Entreprise/AjoutEntreprise";
import CalculDevis from "./components/prodServ/CalculDevis";
import MailBox from "./pages/MailBox";
import ProduitForm from "./components/DevisForms/ProduitForm";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/editor" element={<EditorLogin/>} />
          <Route path="/visitor" element={<VisitorLogin/>} />
          <Route path="/dashboard" element={<ControlPanel />}>
            <Route path="emps" element={<ListEmp />} />
            <Route path="ajouter-emp" element={<AddHumanResource />} />
            <Route path="ajouter-cmpt" element={<AddCompte />} />
            <Route path="old-dp" element={<HistoriqueDP />} />
            <Route path="calcul-devis" element={<CalculDevis/>} />
            <Route path="devis-reel" element={<RealDevis />} />
            <Route path="statis" element={<StatisPage />} />
            <Route path="entreprises" element={<ListeEntreprise/>} />
            <Route path="ajouter-entreprise" element={<AjoutEntreprise />} />
            <Route path="mailbox" element={<MailBox/>}/>
            <Route path="produits" element={<ProduitForm/>}/>
          </Route>
         
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Login/>
<SideBar/>
<div className='block w-4/5'>
  <NavBar/>
  <AddHumanResource/>
</div> */
}
