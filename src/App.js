import logo from "./logo.svg";
import "./App.css";
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
import CustomNavbar from "./components/pages/NavBars";
import Footer from "./components/pages/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
