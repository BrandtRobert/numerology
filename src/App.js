import React from 'react';
import './App.css';
import warning from './warning.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Days Are Numbered!</h1>
        <h4>Numerology Calculator Coming Soon</h4>
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
  );
}

export default App;
