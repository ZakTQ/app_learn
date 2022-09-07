import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="container">
        <div className='toptop'></div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
