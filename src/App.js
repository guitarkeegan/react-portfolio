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
  const [currentPage, setCurrentPage] = useState("Home");

  const renderScreen = () => {
    if(currentPage == "Home") {
      return <Home />
    }else if(currentPage == "Portfolio") {
      return <Portfolio />
    }else if(currentPage == "About") {
      return <About />
    }
  }

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Header changeFn={changePage} />
      {renderScreen()}
      <Footer />
    </>
  );
}

export default App;
