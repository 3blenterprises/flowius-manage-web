import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <image className="floiuslogo" />
        <div className='rectangel'>
          <button className='rectangel2'></button>
          <h4 className='class'>Log in With Email</h4>

          <div >
            <button className='rectangel3'></button>
            <h4 className='signin2'>Log in With Google</h4>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
