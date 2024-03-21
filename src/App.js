import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from "./components/pages/Contact";
import CustomNavbar from './components/NavBars';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path='/Contact' exact element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
