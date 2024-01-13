import { useState } from 'react'

import './App.css'
import { NavBar } from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './Components/Banner.jsx';


function App() {

  return (
      <div className="App">
        <NavBar />
        <Banner/>
      </div>
     
    
  );
}

export default App
