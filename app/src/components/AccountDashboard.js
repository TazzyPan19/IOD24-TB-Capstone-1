import * as React from 'react';

import useAccountContext from '../stores/useContext';

export const AccountDasboard = () => {
    // NOTE VARIABLES AND STATES
    const { currentAccountUser, handleUpdateAccount } = useAccountContext();
    
    const [hasChecked, setHasChecked] = React.useState('');
    // const [hasDonorAccount, setHasDonorAccount] = React.useState(false);
    const [hasAdminAccount, setHasAdminAccount] = React.useState(true);

    // const firstNameField = currentAccountUser.firstName;
    // const lastNameField = currentAccountUser.lastName;

    console.log("Cool", currentAccountUser)

    // NOTE FUNCTIONS
    React.useEffect(() => {
        if (hasChecked === 'admin') {
            // console.log('admin here!')
            setHasAdminAccount(true)
            // setHasDonorAccount(false)
        }

        // if (hasChecked === 'donor') {
        //     // console.log('donor here!')
        //     setHasAdminAccount(false)
        //     setHasDonorAccount(true)
        // }
    },[hasChecked])

    const handleUserRole = (e) => {
        setHasChecked(e.target.value);
    }

    const handleSignOut = () => {
        handleUpdateAccount({ firstName: '', lastName: '', email: '', phoneNumber: '', password: '', donor: ''})
        setTimeout(() => {
            console.log("Sign off", currentAccountUser)
        }, 2000);
    }
  
    // NOTE RETURNS
    return (
        <>
            <div className='app-content-wrapper-02'>
                <div className='bayon-regular' style={{textAlign: 'center', height: "5%", letterSpacing: '2px'}} >
                    <h2>Welcome Back! {currentAccountUser.firstName + ' ' + currentAccountUser.lastName}</h2>
                </div>
                <div className='outfit-regular' style={{display: "flex", backgroundColor: '#bebeff', height: '95%', borderRadius: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: 'red', width: '100%'}}>
                        <h2>Account Details</h2>
                        <div style={{display: 'flex'}}>
                            <ul>
                                <li>First Name: {currentAccountUser.firstName}</li>
                                <li>Account Role: {currentAccountUser.donor}</li>
                                <li>Phone Number: {currentAccountUser.phoneNumber}</li>
                            </ul>
                            <ul style={{marginLeft: '60px'}}>
                                <li>Last Name: {currentAccountUser.lastName}</li>
                                <li>Email Address: {currentAccountUser.email}</li>
                                <li>Password: {currentAccountUser.password}</li>
                            </ul>
                        </div>
                        <h2>Donor Accounts</h2>
                        <h2>Settings</h2>
                        <h2>Notifications</h2>
                        <div>
                            <a role='button' href='/login'><h2>Sign Out</h2></a>
                        </div>
                        <hr style={{width: '100%',margin: '20px 0px 20px 0px', borderColor: 'black'}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDasboard;