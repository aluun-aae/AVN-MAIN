import React from 'react';
import './App.css';
import ToolbarComponent from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';

function App() {
  return (
    <div className="App">
        <div className='app-wrapper'>
         <ToolbarComponent />
          <LeftBar className='leftbar' />
          <div className='content'>
          </div>
        </div>
      </div>
  );
}

export default App;
