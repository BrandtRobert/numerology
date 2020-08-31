import React from 'react';
import './App.css';
import warning from './logos/warning.svg';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import {Switch, Route} from 'react-router-dom';

const LINKS = [
  {
    name: 'What is numerology?',
    to: '/Home'
  },
  {
    name: 'Meaning of the numbers',
    to: '/About'
  },
  {
    name: 'Find your numbers',
    to: '/Calculator'
  },
];

function App() {
  return (
    <div className="App">
      <Navbar links={LINKS}/>
      <header className="App-header">
        <h1>Your Days Are Numbered!</h1>
      </header>
      <main>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Calculator">
          <div>
            <div className='Under-construction'>
              <img src={warning} alt='warning sign' className='Warning-sign'></img>
              This site is under construction
              <img src={warning} alt='warning sign' className='Warning-sign'></img>
            </div>
            <div className="Attribution">
              Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik
                </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
          </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
