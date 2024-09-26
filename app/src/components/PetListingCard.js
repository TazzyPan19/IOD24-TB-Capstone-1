import React from 'react';
import { Tooltip } from '@mui/material';

import sexFemale from '../assets/female-symbol-1.png';
import sexMale from '../assets/male-symbol-1.png';
import { Link } from 'react-router-dom';

export const PetListingCard = ({data}) => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS

    const displaySexIcon = () => {
        if (data.sex === 'Female') {
            return (
                <>
                <Tooltip title='Female'>
                    <img 
                        className='filtered-img-female' 
                        style={{verticalAlign: 'text-bottom'}} 
                        src={sexFemale} alt={`${data.sex}-gender-icon`} 
                        width={'25px'} 
                        height={'100%'} 
                    />
                </Tooltip>
                </>
            )    
        }
        if (data.sex === 'Male') {
            return (
                <>
                 <Tooltip title='Male'>
                    <img 
                        className='filtered-img-male' 
                        style={{verticalAlign: 'text-bottom'}} 
                        src={sexMale} alt={`${data.sex}-gender-icon`} 
                        width={'25px'} 
                        height={'100%'} 
                    />
                </Tooltip>
                </>
            )
        }
    }

    // NOTE RETURNS
    return (
        <> 
            <div className='pet-listing-card-wrapper'>
                <div style={{width: "70%", height: "inherit", padding: "20px", backgroundColor: "#13131c", boxSizing: "border-box", borderRadius: '6px 0px 0px 6px'}}>
                    <div style={{display: 'flex', alignItems: 'baseline'}}>
                        <div>
                            <h4 className='no-style-listing' style={{fontSize: "24px", margin: '0px 10px 0px 0px'}} >{data.petName}</h4>  
                        </div>
                        <div style={{margin: '8px 10px 0px 0px'}} >
                            {displaySexIcon()}
                        </div>
                        <div>
                            <p className='no-style-listing'>Age: {data.age}</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div>
                        <Link to={`${data.id}`} style={{padding: '7px 1.5px 6px 2px', border: '2px solid #634df5', borderRadius: '4px'}}>
                            <button className='outfit-regular' style={{padding: '5px', border: 'unset', borderRadius: '2px', backgroundColor: '#634df5', color: '#fff'}}>Read More</button>
                        </Link>
                    </div>
                </div>
                <div style={{width: "30%", height: "inherit", padding: "20px", backgroundColor: "#bebeff", color: "black", boxSizing: "border-box", borderRadius: '0px 6px 6px 0px'}}>
                    <img src='imagess' alt={data.petName}></img>
                </div>
            </div>
        </>
    )
}

export default PetListingCard;