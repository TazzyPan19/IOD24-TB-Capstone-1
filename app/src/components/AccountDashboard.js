import * as React from 'react';
import DonorListings from './dashboardComp/DonorListings';
import useAccountContext from '../stores/useContext';
import AccountSettings from './dashboardComp/AccountSettings';

export const AccountDasboard = () => {
    // NOTE VARIABLES AND STATES
    const { currentAccountUser, handleUpdateAccount } = useAccountContext();

    const [isEnabled, setEnabled] = React.useState('Enabled') ;
    // const [] = React.useState() ;
    
    const [hasChecked, setHasChecked] = React.useState('');
    // const [hasDonorAccount, setHasDonorAccount] = React.useState(false);
    const [hasAdminAccount, setHasAdminAccount] = React.useState(true);

    console.log("Welcome", currentAccountUser.firstName, currentAccountUser.lastName)

    // NOTE FUNCTIONS
    React.useEffect(() => {
        if (hasChecked === 'admin') {
            setHasAdminAccount(true)
        }
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
                    <div style={{display: 'flex', flexDirection: 'column', padding: '60px', width: '100%'}}>
                        <h2>Account Details</h2>
                        <div style={{display: 'flex', margin: '20px 0px 20px 0px'}}>
                            <ul className='account-dashboard-details'>
                                <li>First Name: {currentAccountUser.firstName}</li>
                                <li>Account Role: {currentAccountUser.donor}</li>
                                <li>Phone Number: {currentAccountUser.phoneNumber}</li>
                            </ul>
                            <ul className='account-dashboard-details' style={{marginLeft: '60px'}}>
                                <li>Last Name: {currentAccountUser.lastName}</li>
                                <li>Email Address: {currentAccountUser.email}</li>
                                <li>Password: {currentAccountUser.password}</li>
                            </ul>
                        </div>
                        <hr style={{width: '100%',margin: '20px 0px 20px 0px', borderColor: 'black'}} />
                        <h2>Manage Pet Listings</h2>
                        <div className='dashboard-modal-button' style={{display: 'flex', flexDirection: 'column', margin: '20px 0px 20px 0px', width: '40%'}}>
                            <DonorListings />
                        </div>
                        <hr style={{width: '100%',margin: '20px 0px 20px 0px', borderColor: 'black'}} />
                        <h2>Settings</h2>
                        <div className='dashboard-modal-button' style={{display: 'flex', flexDirection: 'column', margin: '20px 0px 20px 0px', width: '40%'}}>
                            <AccountSettings />
                        </div>
                        <hr style={{width: '100%',margin: '20px 0px 20px 0px', borderColor: 'black'}} />
                        <h2>Notifications</h2>
                        <div style={{display: 'flex', margin: '20px 0px 20px 0px'}}>
                            <ul className='account-dashboard-details'>
                                <li>Notify when there are new orders</li>
                                <li style={{padding: '2px 1.5px 2px 2px', border: '2px solid #13131c', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
                                    <button className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%', cursor: 'pointer'}}>{isEnabled}</button>
                                </li>
                                <li>Notify when a order is removed</li>
                                <li style={{padding: '2px 1.5px 2px 2px', border: '2px solid #13131c', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
                                    <button className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%', cursor: 'pointer'}}>{isEnabled}</button>
                                </li>
                            </ul>
                        </div>
                        <hr style={{width: '100%',margin: '20px 0px 20px 0px', borderColor: 'black'}} />
                        <div style={{width: '100px'}}>
                            <a className='highlight-links-dash' role='button' style={{listStyleType: 'none', listStyle: 'none', textDecoration: 'none'}} href='/login'><h2>Sign Out</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDasboard;