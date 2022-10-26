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
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Search />} />
          <Route path='/show' exact element={<Show />}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;