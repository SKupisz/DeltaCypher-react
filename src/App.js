import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Together from "./loading/js/components/together.jsx";
import MainSite from "./loading/js/components/finalSite.jsx";
import About from "./loading/js/subcomponents/about.jsx";
import Panel from "./loading/js/subcomponents/panel.jsx";

import "./loading/css/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Together}/>
        <Route path = "/home" component = {MainSite}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/panel" component = {Panel}/>
      </Router>
    </div>
  );
}
export default App;
