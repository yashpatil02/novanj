import logo from "./logo.svg";
import React, { useState, useEffect } from 'react';
import "./App.css";
import Loader from './components/pages/Loader';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/subPages/Home";
import About from "./components/pages/subPages/About";
import Services from "./components/pages/subPages/Services";
import Contact from "./components/pages/subPages/Contact";
import Basketball from "./components/pages/Games/Basketball";
import Fieldhockey from "./components/pages/Games/Fieldhockey";
import Icehockey from "./components/pages/Games/Icehockey";
import Netball from "./components/pages/Games/Netball";
import Soccer from "./components/pages/Games/Soccer";
import Football from "./components/pages/Games/Football";
import CustomNavbar from "./components/pages/NavBars";
import Footer from "./components/pages/Footer";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time according to your need
  }, []);


  return (
    <div>
    {loading ? <Loader /> : (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Basketball" exact element={<Basketball />} />
          <Route path="/Fieldhockey" exact element={<Fieldhockey />} />
          <Route path="/Icehockey" exact element={<Icehockey />} />
          <Route path="/Netball" exact element={<Netball />} />
          <Route path="/Soccer" exact element={<Soccer />} />
          <Route path="/Football" exact element={<Football />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

)}
      </div>
  );
}

export default App;
