import React from 'react';
import '../css/App.css';
import Portfolio from './Portfolio';
import { Parallax, Background } from 'react-parallax';
import Resume from './Resume'
function App() {
  return (
      <div className="App">
         <Parallax
            blur={10}
            bgImage={require('../images/book.jpg')}
            bgImageAlt="the cat"
            strength={200}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px' }} />
            <div style={{ height: '200px' }} />

        </Parallax>
      </div>

  );
}

export default App;
