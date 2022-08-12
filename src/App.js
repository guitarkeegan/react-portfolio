// import all pages, as well as react and the useState hook
import React, {useState} from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";



function App() {
  // We will use the variable below to keep track of which page we are currently on. It will default to the About page.
  const [currentPage, setCurrentPage] = useState('About');

  // Render the page that is stored in the currentPage variable.
  const renderScreen = () => {

    switch (currentPage) {
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
        return <About />;
    }
  }
// function that will use the useState hook to update the currentPage variable.
  const changePage = (page) => {
    setCurrentPage(page)
  }
// Each page will return the same Header and Footer, while the middle section will vary depending on which nav link was clicked in the navbar.
  return (
    <div className="main-container">
      <Header currentPage={currentPage} changeFn={changePage} />
      <div className="page-container">
      {renderScreen()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
