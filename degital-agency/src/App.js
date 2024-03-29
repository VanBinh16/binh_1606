import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Team from "./components/UI/Team";
import Blog from "./components/UI/Blog";
import Testimonial from "./components/UI/Testimonial";
import Newslatter from "./components/UI/Newslatter";
import Footer from "./components/Footer/Footer";
function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newslatter />
      <Footer />
    </>
  );
}

export default App;
