import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Home />
      </section>
    </>
  );
};

export default App;
