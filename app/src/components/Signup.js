import React, { useEffect, useState } from 'react';
import AlertMessage from './AlertMessages';
import { useAccountContext } from '../stores/useContext';

export const Signup = () => {
    // NOTE VARIABLES AND STATES
    const { handleUpdateAccount } = useAccountContext();

    const [firstNameField, setFirstNameField] = useState('');
    const [lastNameField, setLastNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [phoneField] = useState(null);
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

    const handlePassword = (e) => {
      setPasswordField(e.target.value)
    }

    const handleDonorCheck = (e) => {
      setHasDonor(e.target.value = true)
    }

    const handlePasswordCheck = (e) => {
      setPasswordTyping(e.target.value)
    }

    const confirmSignup = (e) => {
      e?.preventDefault();
      setHasSubmit(true);

      handleUpdateAccount({ firstName: firstNameField, lastName: lastNameField, email: emailField, phoneNumber: phoneField, password: passwordField, donor: hasDonor})
      
      console.log("User Profile: ", firstNameField, lastNameField, emailField, passwordField, hasDonor);
    }
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper2'>
            <h2 style={{margin: "10px 0px 40px 0px", textAlign: "center", fontSize: "36px"}} className='bayon-regular'>Signup</h2>
            <div>
              <form id='signup-form'>
                <div className='login-container form-btn-style outfit-regular'>
                  <input onChange={handleFirstName} type='text' placeholder='First Name (Required)' />
                  <input onChange={handleLastName} type='text' placeholder='Last Name (Required)' />
                  <input onChange={handleEmail} type='email' placeholder='Email (Required)' />
                  <input type='number' placeholder='Phone Number (Required)' disabled />
                  <input onChange={handlePassword} type='password' placeholder='Enter Password (Required)' />
                  <input onChange={handlePasswordCheck} type='password' value={passwordTyping}  placeholder='Re-Enter Password (Required)' disabled />
                </div>
                <div style={{margin: "10px 10px 10px 10px"}} className='form-btn-style outfit-regular'>
                  <input onChange={handleDonorCheck} style={{margin: "0px 10px 0px 0px", cursor: "pointer"}} type='checkbox' />
                  <label>If you have read <a href='/adoption-policy/v1'>The Pet Adoption Policy</a> you can register as a Pet Donor</label>
                </div>
                <div style={{display: "flex", boxSizing: "border-box"}}>
                  <button type='submit' onClick={confirmSignup} style={{margin: "40px 10px 40px 10px", padding: "0px 30px 0px 30px", width: "100%", cursor: "pointer"}} className='signup-button form-btn-style bayon-regular'>Register {'>'}</button>
                </div>
              </form>
            </div>
          </div>
          <AlertMessage check={hasSubmit} />
        </>
    )
}

export default Signup;

