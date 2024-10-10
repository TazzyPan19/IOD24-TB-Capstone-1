import React, { useEffect, useRef } from 'react';

export const PetCard = ({data}) => {
    // NOTE VARIABLES AND STATES
    // const petCard = document.getElementById('pet-card');
    const cardClickEvent = useRef(null);
  
    // NOTE FUNCTIONS

    useEffect(()=>{
        cardClickEvent.current.addEventListener('click', () => {
            console.log('Clicked:', data.pet)
            return
        })
    },[])
  
    // NOTE RETURNS
    return (
        <>
            <a href='/pet-listing'>
            <div ref={cardClickEvent} style={{position: "relative", width: "460px", height: "460px", margin: "10px 10px 10px 10px", backgroundColor: "#bebeff"}}>
                <div className='pet-card-wrapper'>
                    <h3 className='pet-card-title outfit-regular'>{data.pet}</h3>
                </div>
                <img className='pet-card-img' src={data.url} alt={data.pet} />
            </div>
            </a>
        </>
    )
}

export default PetCard;