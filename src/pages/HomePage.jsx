
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/HomeCompo/Header';
import UpHeader from '../components/HomeCompo/UpHeader';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function HomePage(){
  

  return (
    <div>
      <UpHeader/>
      <Header/>
      

    </div>
  );
}

export default HomePage;

{/*
  const notify = () => toast("Wow so easy !");
  <button onClick={notify}>Notify !</button>
        <ToastContainer />
 */}