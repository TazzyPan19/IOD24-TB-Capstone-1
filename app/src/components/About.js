import React from 'react';

export const About = () => {
    // NOTE VARIABLES AND STATES
    const imgSrc = 'https://media.istockphoto.com/id/1350689855/photo/portrait-of-an-asian-man-holding-a-young-dog.jpg?s=612x612&w=0&k=20&c=Iw0OedGHrDViIM_6MipHmPLlo83O59by-LGcsDPyzwU='
  
    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <>
          <div className='app-content-wrapper-02'>
            <div className='bayon-regular' style={{textAlign: "center", margin: "0px 0px 20px 0px"}}>
              <h2>About Us</h2>
            </div>
            <div className='outfit-regular' style={{display: 'flex'}}>
              <div>
                 <img style={{width: "400px", height: "400px", objectFit: "cover", borderRadius: '6px'}} src={imgSrc} alt='owner-with-dog' />
                 <figcaption>Alan Moua. Founder of The Pet Ranch Rescue</figcaption>
              </div>
              <p style={{padding: "20px"}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
              </p>
            </div>
          </div>
        </>
    )
}

export default About;