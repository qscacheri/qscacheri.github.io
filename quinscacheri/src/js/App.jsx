import React from 'react';
import '../css/App.css';
import Portfolio from './Portfolio';
import { Parallax, Background } from 'react-parallax';
import Resume from './Resume'
import About from './About'
function App() {
  return (
    <div className="App parallax-wrapper">
        <h1 className='title'>Quin Scacheri</h1>
        <About />
        <Portfolio />
        <Resume />
      </div>

   

  );
}

export default App;
