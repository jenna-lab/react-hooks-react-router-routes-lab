import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" element={Home} />
      <Route path="/movies" element={Movies} />
      <Route path="/directors" element={Directors} />
      <Route path="/actors" element={Actors} />
    </BrowserRouter>
  );
}

export default App;
