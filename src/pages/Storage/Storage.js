import React, { useState, useEffect } from 'react'
import GridWrapper from '../../components/Common/GridWrapper/GridWrapper';
import BasicSnackbar from '../../components/Common/BasicSnackbar/BasicSnackbar';
import UserTable from '../../components/Common/UserTable/UserTable';
import BasicCard from '../../components/Common/BasicCard/BasicCard';

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
      <GridWrapper>
        <BasicCard 
          content={<UserTable onError={() => setOpen(true)} />}
        />
        <BasicSnackbar
          open={open}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
        />
      </GridWrapper>
    )
}

export default Storage