import React from "react";
import "./index.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Navbar />
      <About />
    </div>
  );
};

export default App;
