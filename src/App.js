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
  const [currentPage, setCurrentPage] = useState('About');

  const renderScreen = () => {

    switch (currentPage) {
      case "Home":
        return <Home />
        break;
      case "Portfolio":
        return <Portfolio />
        break;
      case "About":
        return <About />
        break;
      case "Contact":
        return <Contact />;
        break;
      case "Resume":
        return <Resume />;
        break;
      default:
        return <Home />;
    }
  }

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Header currentPage={currentPage} changeFn={changePage} />
      {renderScreen()}
      <Footer />
    </>
  );
}

export default App;
