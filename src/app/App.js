import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../components/NavBar/NavBar.js";
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about-me" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
