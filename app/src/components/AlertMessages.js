import React from 'react';

export const AlertMessage = ({check}) => {
    // NOTE VARIABLES AND STATES
    const messagesConfig = [
        {
            messageText: 'Successfully Registered!', bgColor: '#84df69', 
            borderName: 'solid #005010 2px', color: "#005010"
        },
        {
            messageText: 'Please fill all the required fields before submiting!', bgColor: '#f18648', 
            borderName: 'solid #500000 2px', color: "#500000"
        },
        {
            messageText: 'Incorrect Password or Email Address!', bgColor: '#f18648', 
            borderName: 'solid #500000 2px', color: "#500000"
        }
    ]

    // NOTE FUNCTIONS

    const displayMessage = () => {
        return check ?
            <div style={{width: "400px", backgroundColor: messagesConfig[1].bgColor,  padding: "18px", margin: "20px auto 20px auto", border: messagesConfig[1].borderName, borderRadius: "4px"}}>
                <p style={{color: messagesConfig[1].color}} className='outfit-regular'>{messagesConfig[1].messageText}</p>
            </div> : <></>
    }
  
    // NOTE RETURNS
    return (
        <>
            {displayMessage()}
        </>
    )
}

export default AlertMessage;

// const displayErrorAlert = () => {
//     return check ? (
//       <div style={{width: "400px", backgroundColor: "#f18648",  padding: "18px", margin: "auto auto", border: "solid #500000 2px", borderRadius: "4px"}}>
//         <p style={{color: "#500000"}} className='outfit-regular'>Incorrect Password or Email Address!</p>
//       </div>
//       ) : 
//         <></>
// }

// const displaySuccessAlert = () => {
//   return check ? (
//       <div style={{width: "400px", backgroundColor: "#84df69",  padding: "18px", margin: "20px auto 20px auto", border: "solid #005010 2px", borderRadius: "4px"}}>
//         <p style={{color: "#005010"}} className='outfit-regular'>Successfully Registered!</p>
//       </div>) :
//         <></>
// }

