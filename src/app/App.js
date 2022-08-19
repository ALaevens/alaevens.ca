import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "../components/NavBar/NavBar.js";
import About from '../components/About/About';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/about-me" element={<About />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
