// import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import AccountCreation from './views/accountCreation/accountCreation';
import InvestorProfileWrapper from './views/investorProfile/investorProfileWrapper';
import IdentityVerificationWrapper from './views/identityVerification/identityVerificationWrapper';
import InvestScreen from './views/investScreen/investScreen';

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<AccountCreation />} />
          <Route path="/investor-profile" element={<InvestorProfileWrapper />} />
          <Route path="/identity-verification" element={<IdentityVerificationWrapper />} />
          <Route path="/invest" element={<InvestScreen />} />
        </Routes>
      </ Router>
    </>
  )
}

export default App;
