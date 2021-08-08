import { useState } from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo_part">
          <a href="#logo">React Navbar</a>
        </div>
        <ul
          className="nav_links"
          style={{ transform: open ? 'translateX(0px)' : '' }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars icon_bar"></i>
      </nav>
    </div>
  );
}

export default App;
