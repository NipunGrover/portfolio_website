import { useState } from 'react'

import './App.css'
import { NavBar } from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './Components/Banner.jsx';
import {Skills} from './Components/Skills.jsx';
import {Projects} from './Components/Projects.jsx';

function App() {

  return (
      <div className="App">
        <NavBar />
        <Banner/>
        <Skills/>
        <Projects/>
      </div>
     
    
  );
}

export default App
