// import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AccountCreation from './views/accountCreation/accountCreation';
import InvestorProfileWrapper from './views/investorProfile/investorProfileWrapper';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountCreation />} />
        <Route path="/investor-profile" element={<InvestorProfileWrapper />} />
      </Routes>
    </ Router>
  )
}

export default App;
