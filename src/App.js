import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

// Components
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:single" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
