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
import DotLoader from "react-spinners/DotLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="app-loder">
          <DotLoader
            loading={loading}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#e1b8f9"
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div>
          <Header />

          <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </div>
      )}
    </>
  );
}

export default App;
