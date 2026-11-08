// import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AccountCreation from './views/accountCreation/accountCreation';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountCreation />} />
      </Routes>
    </ Router>
  )
}

export default App;
