import React from "react";
import "./index.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Navbar />
    </div>
  );
};

export default App;
