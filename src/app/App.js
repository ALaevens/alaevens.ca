import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../components/NavBar/NavBar.js";
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import NotFound from '../pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <div className='contentArea'>
          <Routes>
            <Route path="/about-me" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
