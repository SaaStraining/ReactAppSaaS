import './App.css';
import Login from './pages/Login';
import SideBar from './componnents/SideBar';
import NavBar from './componnents/NavBar';

function App() {
  return (
    <div className="App flex">
      {/* <Login/> */}
      <SideBar/>
      <NavBar/>
    </div>
  );
}

export default App;
