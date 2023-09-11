// src/App.js
import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import i18n from "./i18n";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
