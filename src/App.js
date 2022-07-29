import React, {useState} from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// Our App component returns the Greeting component
function App() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
