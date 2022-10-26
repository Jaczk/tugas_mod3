import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from './components/search';
import Show from './components/show';
// import Context from './components/Index';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className='NavBar'>
          <ul className='ul'>
            <li className='li'>
              <Link to="/">Search</Link>
            </li>
            <li className='li'>
              <Link to="/show">Show</Link>
            </li>
            <li className='li'>
              <Link to="/line">Rand</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Search />} />
          {/* <Route path='/index' exact element={<Show />} />
          <Route path='/context' exact element={<Context />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;