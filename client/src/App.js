import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

// Views
import Layout from './modules/views/Layout';
import Landing from './modules/views/Landing';

// cointainers
import Home from './modules/views/Home';
import NotFound from './modules/components/NotFound';
import CharacterForm from './modules/components/CharacterForm';



function App() {
  return (
    <div className="App" style={{
      maxWidth: "700px",
      margin: "auto"
    }}>
      <Switch >
        <Route exact path="/" component={Landing} />
        <Route path="/home" >
          <Layout children={<Home/>}/>
        </Route>
        <Route path="/add" >
          <Layout children={<CharacterForm/>}/>
        </Route>
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
