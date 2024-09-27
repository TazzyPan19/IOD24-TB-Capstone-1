import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBarComp } from './components/NavBarComp';
import { UserProvider } from './stores/useContext';

import Landing from './components/Landing';
import DonorRegister from './components/DonorRegister';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Services from './components/Services';
import AdoptPolicy from './components/AdoptPolicy';
import AdoptForm from './components/AdoptForm';
import PetListing from './components/PetListing';
import AccountDasboard from './components/AccountDashboard';
import { NoAccount } from './components/NoAccount';
import ViewerComp from './components/ViewerComp';

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <NavBarComp/>
        <Routes>
          <Route exact path='/' index element={<Landing />} />
          <Route path='donor-register' element={<DonorRegister />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />

          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='account' element={<AccountDasboard />} />
          <Route path='noaccount' element={<NoAccount />} />

          <Route path='adoption-policy/v1' element={<AdoptPolicy />} />
          <Route path='adoption-form' element={<AdoptForm />} />
          <Route path='pet-listing' element={<PetListing />} />
          <Route path='pet-listing/:id' element={<ViewerComp />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
