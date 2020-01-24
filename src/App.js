import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Together from "./loading/js/components/together.jsx";
import About from "./loading/js/subcomponents/about.jsx";
import "./loading/css/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Together}/>
        <Route path = "/about" component = {About}/>
      </Router>
    </div>
  );
}
export default App;
