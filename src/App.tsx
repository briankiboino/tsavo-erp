import React from "react";
import "./App.css";
import { Snackbar } from "./components";
import Routes from "./routes";

function App() {
  return (
    <React.Fragment>
      <Snackbar />
      <Routes />
    </React.Fragment>
  );
}

export default App;
