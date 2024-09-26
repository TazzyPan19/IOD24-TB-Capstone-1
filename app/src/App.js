import React, { useEffect, useState } from 'react';
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

// import { Fab } from '@mui/material';

const App = () => {
  // eslint-disable-next-line
  let [count, setCount] = useState(0);
  const [userData, setUserData] = useState({});

  // const handleCount = () => {
  //   setCount(count + 1);
  // }

  // const handleReset = () => {
  //   setCount(count = 0);
  // }

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/1`)
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            // console.log(data.datasheet[0])
            setUserData(data.datasheet[0])
        }})
    .catch((err) => console.log(err.error))
},[])

  return (
    <div className="App">
      <UserProvider>
        <NavBarComp counter={count}/>
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
          <Route path='adoption-form' element={<AdoptForm data={userData} />} />
          <Route path='pet-listing' element={<PetListing />} />
          <Route path='pet-listing/:id' element={<ViewerComp />} />
        </Routes>
      </UserProvider>
      {/* <section style={{position: 'absolute', top: '0'}}>
        <Fab onClick={handleCount} style={{backgroundColor: "#634df5", margin: "140px 0px 0px 40px"}} color="primary" aria-label="number">
          <p className='outfit-regular'>+</p>
        </Fab>
        <Fab onClick={handleReset} style={{backgroundColor: "#634df5", margin: "140px 0px 0px 40px"}} color="primary" aria-label="number">
          <p className='outfit-regular'>CE</p>
        </Fab>
      </section> */}
    </div>
  );
}

export default App;
