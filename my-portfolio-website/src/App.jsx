import { useState } from 'react'

import './App.css'
import { NavBar } from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './Components/Banner.jsx';
import {Skills} from './Components/Skills.jsx';
import {Projects} from './Components/Projects.jsx';
import {Contact} from './Components/Contact.jsx';
import {Footer} from './Components/Footer.jsx';
 
function App() {

  return (
      <div className="App">
        <NavBar />
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
     
    
  );
}

export default App
