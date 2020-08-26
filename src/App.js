import React from 'react';
import './App.css';
import warning from './warning.svg'
import Navbar from './navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';

const LINKS = [
  {
    name: 'Home',
    to: '/Home'
  },
  {
    name: 'What is numerology?',
    to: '/About'
  },
  {
    name: 'Find your numbers',
    to: '/Calculator'
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar links={LINKS}/>
        <header className="App-header">
          <h1>Your Days Are Numbered!</h1>
        </header>
        <main>
          <div className='Under-construction'>
            <img src={warning} alt='warning sign' className='Warning-sign'></img>
            This site is under construction
            <img src={warning} alt='warning sign' className='Warning-sign'></img>
          </div>
          <div className="Attribution">
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik
              </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
