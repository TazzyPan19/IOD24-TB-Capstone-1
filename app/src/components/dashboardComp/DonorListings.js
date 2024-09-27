import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export const DonorListings = () => {
    // NOTE VARIABLES AND STATES
    const [open, setOpen] = React.useState(false);
    const handleOpenCreate = () => setOpen(true);
    const handleCloseCreate = () => setOpen(false);
    const handleOpenEdit = () => setOpen(true);
    const handleCloseEdit = () => setOpen(false);
  
    // NOTE RETURNS
    return (
        <>
           <div style={{padding: '2px 1.5px 2px 2px', border: '2px solid #13131c', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
              <button onClick={handleOpenCreate} className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%', cursor: 'pointer'}}>Create New Pet Listing +</button>
          </div>
          <div style={{padding: '2px 1.5px 2px 2px', border: '2px solid #13131c', borderRadius: '4px', margin: '10px 0px 10px 0px'}}>
              <button onClick={handleOpenEdit} className='outfit-regular' style={{padding: '15px 5px 15px 5px', border: 'unset', borderRadius: '2px', backgroundColor: '#13131c', color: '#fff', width: '100%', cursor: 'pointer'}}>Edit Current Pet Listings #</button>
          </div>
          <Modal
            open={open}
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

export default DonorListings;