import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../components/NavBar/NavBar.js";
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about-me" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
