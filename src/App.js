import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/Home/Home";
import About from "./components/header/about/About";
import Skills from "./components/header/skills/Skills";
import Qualification from "./components/header/qualification/Qualification";
import Contact from "./components/header/contact/Contact";
import Footer from "./components/header/footer/Footer";
import Scrollup from "./components/header/scrollup/Scrollup";
// import DotLoader from "react-spinners/DotLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const [blackAndWhite, setBlackAndWhite] = useState(false);

  const handleButtonClick = () => {
    setBlackAndWhite(!blackAndWhite);
  };

  const headerClassName = `header ${blackAndWhite ? "black-and-white" : ""}`;

  return (
    <div >
      {loading ? (
        <div className="app-loder">
          <PropagateLoader
            loading={loading}
            // cssOverride={override}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#bc9ac1"
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className={headerClassName}>
          <Header onButtonClick={handleButtonClick} blackAndWhite={blackAndWhite}/>

          <main className="main">
            <Home blackAndWhite={blackAndWhite}/>
            <About blackAndWhite={blackAndWhite}/>
            <Skills blackAndWhite={blackAndWhite}/>
            <Qualification blackAndWhite={blackAndWhite}/>
            <Contact blackAndWhite={blackAndWhite}/>
          </main>
          <Footer blackAndWhite={blackAndWhite}/>
          <Scrollup blackAndWhite={blackAndWhite} />
        </div>
      )}
    </div>
  );
}

export default App;
