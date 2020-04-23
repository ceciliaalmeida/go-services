import React from 'react';
import Routes from './routes';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
     <Header />
    <div className="container">

      <div className="content">
        
        <Routes />
      </div>
    </div>
    </>
  );
}

export default App;
