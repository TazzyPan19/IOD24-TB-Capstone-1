import { Snackbar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const AdoptForm = () => {
    // NOTE VARIABLES AND STATES
    const location = useLocation();

    const vaccineCheck = useRef();
    const dewormCheck = useRef();

    const [customerDriversLicense, setCustomerDriversLicense] = useState(undefined);
    const [customerFirstName, setCustomerFirstName] = useState(undefined);
    const [customerLastName, setCustomerLastName] = useState(undefined);
    const [customerEmail, setCustomerEmail] = useState(undefined);

    const [orderNumber, setOrderNumber] = useState(null);
    const [appStatus] = useState('Pending');
    const [hasSubmitForm, sethasSubmitForm] = useState(false);
    const [userData, setUserData] = useState({});
    const [petData, setPetData] = useState({});

    const [messageOpen, setMessageOpen] = useState(false);
    const [failMessageOpen, setFailMessageOpen] = useState(false);

    // NOTE Debugging Tools
    // console.log(location); 
    const dataOne = location.state?.dataOne;
    const dataTwo = location.state?.dataTwo;
    // NOTE Debugging Tools
    // console.log(dataTwo); 

    // NOTE FUNCTIONS

    useEffect(() => {
        setUserData(dataOne);
        setPetData(dataTwo);

        setTimeout(() => {
            // NOTE Debugging pet data from viewer component
            // console.log(petData);
            // console.log(petData.vaccinated);
            // console.log(petData.dewormed);
            // console.log(vaccineCheck.current.disabled);
            // console.log(orderNumber);

            vaccineCheck.current.disabled = petData.vaccinated;
            dewormCheck.current.disabled = petData.dewormed;
        },1000)

        if (orderNumber === null) {
             randomOrderNumber();
        }
        // console.log(orderNumber)

        if (hasSubmitForm === true) {

            fetch(`http://localhost:8080/api/orders/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({statusType: appStatus, referralNumber: orderNumber, userId: userData.id, petId: petData.id  }) 
            })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                }})
            .catch((err) => console.log(err.error))
        }

    },[appStatus, hasSubmitForm, petData, userData])

    const randomOrderNumber = () => {
        setOrderNumber('#' + Math.ceil((Math.random() * (999 - 100) + 100)));
    }

    const handleCustomerFirstName = (e) => {
        setCustomerFirstName(e.target.value);
    }

    const handleCustomerLastName = (e) => {
        setCustomerLastName(e.target.value);
    }

    const handleCustomerEmail = (e) => {
        setCustomerEmail(e.target.value);
    }

    const handleCustomerDriversLicense = (e) => {
        setCustomerDriversLicense(e.target.value);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setFailMessageOpen(false);
        setMessageOpen(false);
      };

    const handleSubmitForm = (e) => {
        e?.preventDefault();

        if (customerDriversLicense === undefined || customerEmail === undefined || 
            customerFirstName === undefined || customerLastName === undefined) {
            
            setFailMessageOpen(true);
            console.log('Failed Order! Check if you filled all the customer fields before submitting!');
        } 
        else {
            sethasSubmitForm(true);
            setMessageOpen(true);
            console.log('Successful Order! You will recieve an email for your application');
        }
    }

    // NOTE RETURNS

    return (
        <>
            <div className='app-content-wrapper-adoptform'>
                <div style={{padding: "60px", height: '850px', backgroundColor: '#bebeff', borderRadius: '6px'}}>
                    <div className='outfit-regular'>
                        <div style={{display: 'flex'}}>
                            <h2>Adoption Order</h2>
                            <h2 style={{marginLeft: '10px'}}>{orderNumber}</h2>
                        </div>
                        <p>
                            Before you order please fill out this application form to verify your identify and any other 
                            relevant information.
                        </p>
                    </div>
                    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '790px'}}>
                        <div>
                            <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '60px'}}>
                                <div className='adopt-form-inputs outfit-regular' style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
                                    <label>Donor First Name</label>
                                    <input value={userData.firstName} type='text' readOnly/>
                                    <label>Donor Email Address </label>
                                    <input value={userData.emailAddress} type='text' readOnly/>
                                </div>
                                <div className='adopt-form-inputs outfit-regular' style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
                                    <label>Donor Last Name</label>
                                    <input value={userData.lastName} type='text' readOnly/>
                                    <label>Donor Phone Number </label>
                                    <input value={userData.phoneNumber} type='text' readOnly/>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '60px'}}>
                                <div className='adopt-form-inputs outfit-regular' style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
                                    <label>Customer First Name</label>
                                    <input onChange={handleCustomerFirstName} type='text' required/>
                                    <label>Customer Email</label>
                                    <input onChange={handleCustomerEmail} type='email' required/>
                                </div>
                                <div className='adopt-form-inputs outfit-regular' style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
                                    <label>Customer Last Name</label>
                                    <input onChange={handleCustomerLastName} type='text' required/>
                                    <label>Customer Drivers License</label>
                                    <input onChange={handleCustomerDriversLicense} type='text' required/>
                                </div>
                            </div>
                            <div className='outfit-regular'>
                                <h4>Service Options</h4>
                            </div>
                            <div className='outfit-regular' style={{display: 'flex', flexDirection: 'column'}}>
                                <div>
                                    <input ref={vaccineCheck} type='checkbox'/>
                                    <label>Vaccination</label>
                                </div>
                                <div>
                                    <input ref={dewormCheck} type='checkbox'/>
                                    <label>Deworming</label>
                                </div>
                                <div>
                                    <input type='checkbox'/>
                                    <label>Grooming 'Extra Care'</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={'/'} style={{padding: '16px 1.5px 17px 2px', border: '2px solid #13131c', borderRadius: '4px'}}>
                                <button type='submit' onClick={handleSubmitForm} className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%'}}>Submit Application</button>
                            </Link>
                        </div>
                    </form>
                    <Snackbar
                        open={messageOpen}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Successful Order! You will recieve an email for your application"
                    />
                        <Snackbar
                        open={failMessageOpen}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Failed Order! Check if you filled all the customer fields before submitting!"
                    />
                </div>
            </div>
        </>
    )
}

export default AdoptForm;