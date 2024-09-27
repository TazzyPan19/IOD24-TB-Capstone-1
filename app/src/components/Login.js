import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAccountContext from '../stores/useContext';
import { Snackbar } from '@mui/material';

export const Login = () => {
    // NOTE VARIABLES AND STATES
    const [emailAddressField, setEmailAddressField] = useState('');
    const [phoneNumberField, setPhoneNumberField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [hasLoginSuccessful, sethasLoginSuccessful] = useState('');
    const [userData, setUserData] = useState({});
    const [messageOpen, setMessageOpen] = React.useState(false);
    const [failMessageOpen, setFailMessageOpen] = React.useState(false);

    const { handleUpdateAccount } = useAccountContext();
  
    // NOTE FUNCTIONS AND USE EFFECT HOOKS

    useEffect(() => {
      fetch(`http://localhost:8080/api/users`)
      .then((res) => res.json())
      .then((data) => {
          if (data) {
              let result = 
                data.datasheet.find((data) =>
                data.emailAddress === emailAddressField && data.phoneNumber === phoneNumberField && data.passwordId === passwordField
              )
                if (result === undefined) {
                  // console.log('Failed to get vaild data!');
                  return null;
                } 
                else {
                  setUserData(result);
                  sethasLoginSuccessful('/')
                  console.log(result);
                }
          }})
      .catch((err) => console.log(err.error))

      // NOTE Debugging when ckecking the current useState variables are correct 
      // console.log(emailAddressField, phoneNumberField, passwordField) 
    },[emailAddressField, phoneNumberField, passwordField, hasLoginSuccessful])

    const handleEmailAddress = (e) => {
      setEmailAddressField(e.target.value);
    }

    const handlePhoneNumber = (e) => {
      setPhoneNumberField(e.target.value);
    }

    const handlePassword = (e) => {
      setPasswordField(e.target.value);
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setMessageOpen(false);
    };

    const confirmLogin = () => {
      // e.preventDefault();
      if (userData.emailAddress === emailAddressField || userData.phoneNumber === phoneNumberField || userData.passwordId === passwordField || userData.roleName === 'donor') {
        
        console.log('Successful Donor Login');
        handleUpdateAccount({ 
          firstName: userData.firstName, 
          lastName: userData.lastName,
          email: userData.emailAddress, 
          phoneNumber: userData.phoneNumber, 
          password: userData.passwordId, 
          donor: userData.roleName
        })
      }
      else {
        setMessageOpen(true)
        console.log('Login Failed! Check if your email address, phone number and password are correct')
      }
    }
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper2'>
            <h2 style={{margin: "10px 0px 40px 0px", textAlign: "center", fontSize: "36px"}} className='bayon-regular'>Login</h2>
            <div>
              <form>
                <div className='login-container form-btn-style outfit-regular'>
                  <input onChange={handleEmailAddress} type='email' placeholder='Email Address' />
                  <input onChange={handlePhoneNumber} type='number' placeholder='Phone Number' />
                  <input onChange={handlePassword} type='password' placeholder='Enter Password' />
                </div>
                <div className='form-btn-style outfit-regular' style={{margin: "10px 10px 10px 10px"}} >
                  <input style={{margin: "0px 10px 0px 0px", cursor: "pointer"}} type='checkbox' />
                  <label>Forgot password? Click here to reset</label>
                </div>
                <Link to={hasLoginSuccessful}>
                  <div style={{display: "flex", boxSizing: "border-box"}}>
                    <button onClick={confirmLogin} className='signup-button form-btn-style bayon-regular' style={{margin: "40px 10px 40px 10px", padding: "0px 30px 0px 30px", width: "100%", cursor: "pointer"}}>Login {'>'}</button>
                  </div>
                </Link>
              </form>
              <Snackbar
                  open={messageOpen}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Login Failed! Check if your email address, phone number and password are correct."
                />
            </div>
          </div>
        </>
    )
}

export default Login;