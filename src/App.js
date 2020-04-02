import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// Importando Header
import Header from './components/partials/Header';

import Routes from './Routes'

function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;