import './App.css';
import Login from './pages/Login';
import SideBar from './componnents/SideBar';
import NavBar from './componnents/NavBar';
import AddHumanResource from './componnents/AddHumanResource';

function App() {
  return (
    <div className="App flex">
      {/* <Login/> */}
      <SideBar/>
      <div className='block w-4/5'>
        <NavBar/>
        <AddHumanResource/>
      </div>
      
    </div>
  );
}

export default App;
