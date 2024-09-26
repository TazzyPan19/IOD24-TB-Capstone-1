import * as React from 'react';
import useAccountContext from '../stores/useContext';
import { Link } from 'react-router-dom';

import PetTitle from '../assets/Pet-Ranch-Title-2.png'

import Badge from '@mui/material/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const NavBarComp = ({counter}) => {
    // NOTE VARIABLES AND STATES
    const { currentAccountUser } = useAccountContext();

    // NOTE FUNCTIONS

    const displayHasAccount = () => {
      if (currentAccountUser.firstName === 'Account') {
        return (
          <>
            <li><Link className='nav-pad' role="button" to="/noaccount">{currentAccountUser.firstName}</Link></li>
            <li><Link to='/noaccount'>
                <Badge className='mui-badge-custom' sx={{margin: "20px 0px 20px 20px"}} color="primary">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Badge>
              </Link></li>
          </>
        ) 
      }
      else {
        return (
          <>
              <li><Link className='nav-pad' role="button" to="/account">{currentAccountUser.firstName}</Link></li>
              <li><Link to='/account'>
                <Badge className='mui-badge-custom' sx={{margin: "20px 0px 20px 20px"}} badgeContent={counter} color="primary">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Badge>
              </Link></li>
          </> 
        )
      }
    }
  
    // NOTE RETURNS
    return (
        <>
          <nav className='navbar-bg'>
            <section style={{display: 'flex', justifyContent: 'space-between', width: '1200px', margin: 'auto auto', alignItems: 'center'}}>
              <ul>
                <li><Link to='/'><img src={PetTitle} alt='logo-here' width={'180px'} height={'100%'} /></Link></li>
              </ul>
              <ul className='highlight-links outfit-regular navbar-container' >
                <li><Link className='nav-pad' role="button" to="/pet-listing">Pet Listing</Link></li>
                <li><Link className='nav-pad' role="button" to="/services">Services</Link></li>
                <li><Link className='nav-pad' role="button" to="/about">About Us</Link></li>
                <li><Link className='nav-pad' role="button" to="/signup">Sign Up</Link></li>
                <li><Link className='nav-pad' role="button" to="/login">Login</Link></li>
                {displayHasAccount()}
              </ul>
            </section>
          </nav>
        </>
    )
}

export default NavBarComp;