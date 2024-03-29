
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/HomeCompo/Header';
import Main from '../components/HomeCompo/Main';
import UpHeader from '../components/HomeCompo/UpHeader';
import CallMain from '../components/HomeCompo/CallMain';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function HomePage(){
  

  return (
    <div>
      <UpHeader/>
      <Header/>
      <Main/>
      <CallMain/>
    </div>
  );
}

export default HomePage;

{/*
  const notify = () => toast("Wow so easy !");
  <button onClick={notify}>Notify !</button>
        <ToastContainer />
 */}