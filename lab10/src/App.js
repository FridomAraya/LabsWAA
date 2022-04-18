import React, { useState } from "react";
import Dashboard from "./containers/Dashboard";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1> Welcome WAA </h1>
      <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
