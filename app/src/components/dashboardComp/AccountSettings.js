import * as React from 'react';
import useAccountContext from '../../stores/useContext';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const AccountSettings = () => {
    // NOTE VARIABLES AND STATES
    const { handleUpdateAccount } = useAccountContext();

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [deleteUserProfile, setDeleteUserProfile] = React.useState(false);
    // const [onDeletion, setDeletion] = React.useState();

    React.useEffect(() => {
      if (deleteUserProfile === true) {
        fetch(`http://localhost:8080/api/users/delete/id`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                console.log(data)
            }})
        .catch((err) => console.log(err.error))
      }
    })

    const handleOpenDelete = () => setOpen(true);
    const handleCloseDelete = () => setOpen(false);
    const handleOpenEdit = () => setOpen1(true);
    const handleCloseEdit = () => setOpen1(false);

    const handleExit = () => {
      setOpen(false);
    }

    const handleDeletion = () => {
      // setDeletion('/');
      setDeleteUserProfile(true);
      handleUpdateAccount({firstName: 'Account', lastName: '', emailAddress: '', phoneNumber: '', password: '', donor: null})
    }
  
    // NOTE RETURNS
    return (
        <>
          <div style={{padding: '2px 1.5px 2px 2px', border: '2px solid #13131c', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
              <button onClick={handleOpenEdit} className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%', cursor: 'pointer'}}>Edit Account +</button>
          </div>
          <div style={{padding: '2px 1.5px 2px 2px', border: '2px solid #bf3333', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
              <button onClick={handleOpenDelete} className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#df2c2c', color: '#fff', width: '100%', cursor: 'pointer'}}>Delete Account #</button>
          </div>

          <Modal
            open={open}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h2 className='bayon-regular'>Account Deletion</h2>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                  Are you sure you want to delete your account? There will be no going back.
                </p>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                  <button className='outfit-regular' onClick={handleExit} style={{padding: '5px', backgroundColor: '#13131c', color: '#fff', marginRight: '20px'}}>Actually I changed my mind</button> 
                  <Link to={'/'}>
                    <button className='outfit-regular' onClick={handleDeletion} style={{padding: '5px', backgroundColor: '#13131c', color: '#fff', marginLeft: '20px'}}>Yes, I'm sure</button>
                  </Link>
                </div>
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open1}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                New Pet Listing
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div style={{padding: '20px', backgroundColor: 'red', width: '100%', boxSizing: 'border-box'}}>
                  <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                    <li>Pet Name</li>
                    <li>Animal Type</li>
                    <li>Breed</li>
                    <li>Sex</li>
                    <li>Date Posted</li>
                    <li>Edit</li>
                    <li>Delete</li>
                  </ul>
                  <ul>
                    <li>Content</li>
                  </ul>
                </div>
              </Typography>
            </Box>
          </Modal>
        </>
    )
}

export default AccountSettings;