import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <Outlet />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
