import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navbar from './components/layout/Navbar';
import ThemeSelector from './components/Theme/index'
import Generator from './components/Generator/index'

function App() {

  return (
    <Router>
      <Navbar />

      <div className="container mt-5">
        {/* <Route exact={true} path="/" component={ThemeSelector}/> */}
        <Route exact={true} path="/" component={Generator}/>
      </div>
    </Router>
  );
}

export default App;
