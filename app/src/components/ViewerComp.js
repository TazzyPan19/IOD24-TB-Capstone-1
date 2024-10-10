import React, { useEffect, useState } from "react";
import catDefaultImg from '../assets/cat-2.jpg'

import { Link, useParams } from "react-router-dom";

export const ViewerComp = () => {
    // NOTE VARIABLES AND STATES
    const [petVaccinated, setPetVaccinated] = useState('');
    const [petDewormed, setPetDewormed] = useState('');
    const [userData, setUserData] = useState({});
    const [petData, setPetData] = useState({});
    const params = useParams();

    // TODO Convert the date and time from ISO Dates to a readable datetime format (Future Implementation)

    // const days = [
    //     "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday", "Sunday"
    // ]

    // const months = [
    //     "Janaury", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    // ]

    useEffect(() => {
        fetch(`http://localhost:8080/api/pets/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    // console.log(data.datasheet[0])
                    setPetData(data.datasheet[0])
                }})
            .catch((err) => console.log(err.error))
        
        fetch(`http://localhost:8080/api/users/${petData.userId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    // console.log(data.datasheet[0])
                    setUserData(data.datasheet[0])
                }})
            .catch((err) => console.log(err.error))

        if (petData.dewormed === true || petData.vaccinated === true) {
            setPetDewormed('Yes');
        }
        else {
            setPetDewormed('No')
        }
        if (petData.vaccinated === true) {
            setPetVaccinated('Yes');
        }
        else {
            setPetVaccinated('No');
        }
    },[params.id, petData.userId, petData.dewormed, petData.vaccinated])

    // NOTE FUNCTIONS

    const displayPostDate = () => {
        const getYear = petData.createdAt?.substring(0, 4) ;
        // const getMonth = petData.createdAt?.substring(5, 7) ;
        const getDay = petData.createdAt?.substring(8, 10);
        // const get24HourTime = petData.createdAt ;
        
        const newDateFormat = `September ${getDay}th ${getYear}`;
        
        return <><li className="bayon-regular" style={{fontSize: '20px'}}>Date Posted</li><li>{newDateFormat}</li></>
    }
  
    // NOTE RETURNS
    return (
            <>
                <div className='app-content-wrapper-viewer'>
                    <section style={{display: 'flex', }}>
                        <div style={{width: '80%'}}>
                            <img src={petData.imgSource} alt="default-picture" width={'100%'} height={'620px'} style={{objectFit: 'fill'}} />
                        </div>
                        <div className="outfit-regular" style={{width: '50%', height: '580px',  backgroundColor: '#b4aaf7', padding: '20px'}}>
                            <div className="bayon-regular">
                                <h2>{petData.petName}</h2>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', height: '510px', justifyContent: 'space-between', width: '300px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <ul className="pet-infoboard">
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Sex</li>
                                        <li>{petData.sex?.charAt(0).toUpperCase() + petData.sex?.slice(1)}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Age</li>
                                        <li>{petData.age}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Weight</li>
                                        <li>{petData.weight}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Animal</li>
                                        <li>{petData.catergory}</li>
                                    </ul>
                                    <ul className="pet-infoboard">
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Breed</li>
                                        <li>{petData.typeName}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Vaccinated</li>
                                        <li>{petVaccinated}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Dewormed</li>
                                        <li>{petDewormed}</li>
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Color</li>
                                        <li>{petData.colour}</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="pet-infoboard" style={{marginTop: '20px'}}>
                                        {displayPostDate()}
                                        <li className="bayon-regular" style={{fontSize: '20px'}}>Donor</li>
                                        <li>{userData?.firstName + ' ' + userData?.lastName}</li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to='/adoption-form' state={{dataOne: userData, dataTwo: petData}} style={{padding: '7px 1.5px 7px 2px', border: '2px solid #13131c', borderRadius: '4px'}}>
                                        <button className='outfit-regular' style={{padding: '5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%'}}>Place Order</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="bayon-regular">
                            <h4>About Them</h4>
                        </div>
                        <div className="outfit-regular">
                            {petData.descriptionText}
                        </div>
                    </section>
                </div>
            </>
        ) 
}

export default ViewerComp;


// const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());