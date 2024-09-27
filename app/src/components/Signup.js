import React, { useEffect, useState } from 'react';
import AlertMessage from './AlertMessages';
import { useAccountContext } from '../stores/useContext';
import { Snackbar } from '@mui/material';

export const Signup = () => {
    // NOTE VARIABLES AND STATES
    const { handleUpdateAccount } = useAccountContext();

    const [messageOpen, setMessageOpen] = useState(false);

    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [passwordTyping, setPasswordTyping] = useState('');
    const [hasSubmit, setHasSubmit] = useState(false);
    const [hasDonor, setHasDonor] = useState(false);

    // NOTE FUNCTIONS

    useEffect(() => {
      if (passwordTyping.length >= 1) {
        console.log(passwordTyping);
      }  

      if (hasSubmit === true) {

        fetch(`http://localhost:8080/api/users/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName: firstNameField, lastName: lastNameField, roleName: 'donor', emailAddress: emailField, phoneNumber: phoneField, driversLicense: '', passwordId: passwordField})
        })
          .then((res) => res.json())
          .then((data) => {
              if (data) {
                  console.log(data)
              }})
          .catch((err) => console.log(err.error))

        setTimeout(() => {
          setHasSubmit(false)
        }, 2000);
      }
      
    },[passwordTyping, hasSubmit])

    const handleFirstName = (e) => {
      setFirstNameField(e.target.value)
    }

    const handleLastName = (e) => {
      setLastNameField(e.target.value)
    }

    const handleEmail = (e) => {
      setEmailField(e.target.value)
    }

    const handlePhoneNumber = (e) => {
      setPhoneField(e.target.value)
    }

    const handlePassword = (e) => {
      setPasswordField(e.target.value)
    }

    const handleDonorCheck = (e) => {
      setHasDonor(e.target.value = true)
    }

    const handlePasswordCheck = (e) => {
      setPasswordTyping(e.target.value)
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setMessageOpen(false);
    };

    const confirmSignup = (e) => {
      e?.preventDefault();
      
      setMessageOpen(true);
      setHasSubmit(true);
      handleUpdateAccount({ 
        firstName: firstNameField, 
        lastName: lastNameField, 
        email: emailField, 
        phoneNumber: phoneField, 
        password: passwordField, 
        donor: hasDonor
      })
      console.log('Successful Donor Sign Up!', firstNameField, lastNameField, emailField, passwordField, hasDonor);
    }
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper2'>
            <h2 style={{margin: "10px 0px 40px 0px", textAlign: "center", fontSize: "36px"}} className='bayon-regular'>Signup</h2>
            <div>
              <form id='signup-form'>
                <div className='login-container form-btn-style outfit-regular'>
                  <input onChange={handleFirstName} type='text' placeholder='First Name' required />
                  <input onChange={handleLastName} type='text' placeholder='Last Name' required />
                  <input onChange={handleEmail} type='email' placeholder='Email Address' required />
                  <input onChange={handlePhoneNumber}type='number' placeholder='Phone Number' required />
                  <input onChange={handlePassword} type='password' placeholder='Enter Password' required />
                  <input onChange={handlePasswordCheck} type='password' value={passwordTyping}  placeholder='Re-Enter Password' required />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}} className='form-btn-style outfit-regular'>
                  <input onChange={handleDonorCheck} style={{margin: "0px 10px 0px 0px", cursor: "pointer"}} type='checkbox' required />
                  <label>If you have read <a href='/adoption-policy/v1'>The Pet Adoption Policy</a> you can register as a Pet Donor</label>
                </div>
                <div style={{display: "flex", boxSizing: "border-box"}}>
                  <button type='submit' onClick={confirmSignup} style={{margin: "40px 10px 40px 10px", padding: "0px 30px 0px 30px", width: "100%", cursor: "pointer"}} className='signup-button form-btn-style bayon-regular'>Register {'>'}</button>
                </div>
              </form>
              <Snackbar
                  open={messageOpen}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message={`Successful Donor Sign Up!' ${firstNameField} ${lastNameField}`}
                />
            </div>
          </div>
          <AlertMessage check={hasSubmit} />
        </>
    )
}

export default Signup;

