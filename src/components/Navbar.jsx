import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  // justifyContent: 'space-between',
});

export default function Navbar() {
  return (
    <AppBar position='sticky' sx={{ bgcolor: '#f5f9fc' }}>
      <StyledToolBar>
        <IconButton
          size='large'
          edge='start'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography p={2} color={'black'}>
          DENA
        </Typography>
      </StyledToolBar>
    </AppBar>
  );
}
