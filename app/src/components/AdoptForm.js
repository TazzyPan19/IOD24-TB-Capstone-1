import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const AdoptForm = ({data}) => {
    // NOTE VARIABLES AND STATES
    const [orderNumber, setOrderNumber] = useState(null);
    // const [userData, setUserData] = useState({});
    // const [petData, setPetData] = useState({});
    // const params = useParams();

    // NOTE FUNCTIONS

    useEffect(() => {
        // fetch(`http://localhost:8080/users/${params.id}`)
        // .then((res) => res.json())
        // .then((data) => {
        //     if (data) {
        //         console.log(data.datasheet[0])
        //         setUserData(data.datasheet[0])
        //     }})
        // .catch((err) => console.log(err.error))

        // fetch(`http://localhost:8080/pets/${params.id}`)
        // .then((res) => res.json())
        // .then((data) => {
        //     if (data) {
        //         console.log(data.datasheet[0])
        //         setPetData(data.datasheet[0])
        //     }})
        // .catch((err) => console.log(err.error))
        console.log(data.firstName)
        randomOrderNumber();
    },[])

    // const handleSubmitForm = (e) => {
    //     e?.preventDefault();

    //     setUserData();
    //     setPetData();
    // }

    const randomOrderNumber = () => {
        // if (orderNumber === orderData.referralNumber) {
        //     setOrderNumber('#' + Math.ceil((Math.random() * (999 - 100) + 100)));
        // }
        setOrderNumber('#' + Math.ceil((Math.random() * (999 - 100) + 100)));
    }

    // NOTE RETURNS

    return (
        <>
            <div className='app-content-wrapper-adoptform'>
                <div style={{padding: "20px", height: '850px', backgroundColor: '#bebeff'}}>
                    <div className='outfit-regular'>
                        <div style={{display: 'flex'}}>
                            <h2>Adoption Order</h2>
                            <h2 style={{marginLeft: '10px'}}>{orderNumber}</h2>
                        </div>
                        <p>
                            Before you order please fill out this application form to verify your identify and any other 
                            relevant information
                        </p>
                    </div>
                    <form className='outfit-regular' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '790px'}}>
                        <div>
                            <div style={{display: 'flex', marginBottom: '60px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                                    <label>Donor First Name</label>
                                    <input value={"Bob"} type='text' readOnly/>
                                    <label>Donor Last Name</label>
                                    <input value={"Rogers"} type='text' readOnly/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                                    <label>Donor Email Address </label>
                                    <input value={"user003@pets.com"} type='text' readOnly/>
                                    <label>Donor Phone Number </label>
                                    <input value={"0438754539"} type='text' readOnly/>
                                </div>
                            </div>
                            <div style={{display: 'flex', marginBottom: '60px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                                    <label>Customer First Name</label>
                                    <input type='text'/>
                                    <label>Customer Last Name</label>
                                    <input type='text'/>
                                    <label>Customer Gender</label>
                                    <input type='text'/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                                    <label>Customer Drivers License</label>
                                    <input type='text'/>
                                    <label>Customer Vaccination</label>
                                    <input type='text'/>
                                    <label>Customer Vaccination</label>
                                    <input type='text'/>
                                </div>
                            </div>
                            <div>
                                <h4>Service Options</h4>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div>
                                    <input type='radio'/>
                                    <label>Vaccination</label>
                                </div>
                                <div>
                                    <input type='radio'/>
                                    <label>Deworming</label>
                                </div>
                                <div>
                                    <input type='radio'/>
                                    <label>Grooming 'Extra Care'</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={'/'} style={{padding: '16px 1.5px 17px 2px', border: '2px solid #13131c', borderRadius: '4px'}}>
                                <button className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%'}}>Submit Application</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdoptForm;