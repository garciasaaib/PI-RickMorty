import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Characters from './components/Characters';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route  path="/main" component={Characters} />
    </div>
  );
}

export default App;
