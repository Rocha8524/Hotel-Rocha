import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Home />
      <Rooms />
      <SingleRooms />
      <Error />
    </div>
  );
}

export default App;
