import React from 'react';

import vaccineIcon from '../assets/Tang-1.png' ;
import wormIcon from '../assets/Worm-1.png' ;
import brushIcon from '../assets/Brush-1.png' ;
import vanIcon from '../assets/Van-1.png' ;


export const Services = () => {
    // NOTE VARIABLES AND STATES
  
    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper-01'>
            <div className='bayon-regular' style={{textAlign: 'center', margin: "0px 0px 20px 0px"}} >
              <h2>Services</h2>
            </div>
            <div style={{backgroundColor: "#13131c", color: "#fff", padding: "20px", borderRadius: '6px'}}>
              <div style={{marginBottom: "100px"}}>
                <div className='service-icon-wrapper'>
                  <img src={vaccineIcon} alt='vaccine-icon' width={'60px'} height={'100%'} />
                  <h3 className='bayon-regular' style={{margin: '0px 0px 0px 10px'}}>Vaccination</h3>
                </div>
                <p className='outfit-regular'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                  id est laborum.
                </p>
              </div>
              <div style={{marginBottom: "100px"}}>
              <div className='service-icon-wrapper'>
                  <img src={wormIcon} alt='worm-icon' width={'60px'} height={'100%'} />
                  <h3 className='bayon-regular' style={{margin: '0px 0px 0px 10px'}}>De-Worming</h3>
                </div>
                <p className='outfit-regular'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                  id est laborum.
                </p>
              </div>
              <div style={{marginBottom: "100px"}}>
                <div className='service-icon-wrapper'>
                  <img src={brushIcon} alt='groom-icon' width={'60px'} height={'100%'} />
                  <h3 className='bayon-regular' style={{margin: '0px 0px 0px 10px'}}>Grooming</h3>
                </div>
                <p className='outfit-regular'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                  id est laborum.
                </p>
              </div>
              <div style={{marginBottom: "100px"}}>
                <div className='service-icon-wrapper'>
                  <img src={vanIcon} alt='van-icon' width={'60px'} height={'100%'} />
                  <h3 className='bayon-regular' style={{margin: '0px 0px 0px 10px'}}>Delivery {'(Limited to Local Areas Only)'}</h3>
                </div>
                <p className='outfit-regular'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                  id est laborum.
                </p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Services;