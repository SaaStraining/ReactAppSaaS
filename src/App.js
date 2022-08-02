// import './App.css';
import './index.css'
import  {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import ControlPanel from './pages/ControlPanel';

function App() {
  return (
    <div className="App ">
     
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/admin' element={<ControlPanel/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <Login/>
<SideBar/>
<div className='block w-4/5'>
  <NavBar/>
  <AddHumanResource/>
</div> */}