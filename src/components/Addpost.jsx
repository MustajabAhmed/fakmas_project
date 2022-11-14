import styled from '@emotion/styled';
import { Add, BabyChangingStationRounded, Close } from '@mui/icons-material';
import { Box, Button, Fab, Modal, TextField, Tooltip } from '@mui/material';
import React from 'react';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component='svg' sx={{ width: 100, height: 100 }}>
      <Box
        component='polygon'
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points='0,100 50,00, 100,100'
      />
    </Box>
  </Paper>
);

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});
export default function Addpost() {
  const [openmanu, setOpenmanu] = React.useState(false);
  const [dwc, setDwc] = useState(false);
  const [fak, setFak] = useState(false);
  const [bay, setBay] = useState(false);
  const [lms, setLms] = useState(false);
  const [fly, setFly] = useState(false);

  const handleClick = () => {
    setOpenmanu(!openmanu);
  };
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          right: { xs: 'calc(10px)', md: 60 },
        }}
      >
        <Fab color='primary' aria-label='Add'>
          <Add style={{ color: 'white !important' }} />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          bgcolor={'#F2F2FC'}
          width={'25%'}
          height={'100vh'}
          p={3}
          borderRadius={5}
        >
          <Tooltip
            onClick={(e) => setOpen(false)}
            title='close'
            sx={{
              position: 'fixed',
              top: 10,
              right: { xs: 'calc(8px)', md: 40 },
            }}
          >
            <Close style={{ color: 'white !important' }} />
          </Tooltip>
          <h3 style={{ marginTop: '40px' }}>FAK ULD Location</h3>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {openmanu ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='MS BULK AREA' />
            </ListItemButton>
            <Collapse
              in={openmanu}
              timeout='auto'
              unmountOnExit
              sx={{ mx: '18px' }}
            >
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton onClick={(e) => setDwc(!dwc)}>
              <ListItemIcon>
                {dwc ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='DWC Bay Area' />
            </ListItemButton>
            <Collapse in={dwc} timeout='auto' unmountOnExit sx={{ mx: '18px' }}>
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton
              onClick={(e) => {
                setFak(!fak);
              }}
            >
              <ListItemIcon>
                {fak ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='Fake Holding/Staging Area opposie C-64 Bay Near Concourse' />
            </ListItemButton>
            <Collapse in={fak} timeout='auto' unmountOnExit sx={{ mx: '18px' }}>
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton onClick={(e) => setBay(!bay)}>
              <ListItemIcon>
                {bay ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='Bay G21' />
            </ListItemButton>
            <Collapse in={bay} timeout='auto' unmountOnExit sx={{ mx: '18px' }}>
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton onClick={(e) => setLms(!lms)}>
              <ListItemIcon>
                {lms ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='LMS1 Near Store or LMS1 Parking Area' />
            </ListItemButton>
            <Collapse in={lms} timeout='auto' unmountOnExit sx={{ mx: '18px' }}>
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton onClick={(e) => setFly(!fly)}>
              <ListItemIcon>
                {fly ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary='Flying Out/In to STNS/DXB DWC' />
            </ListItemButton>
            <Collapse in={fly} timeout='auto' unmountOnExit sx={{ mx: '18px' }}>
              <List component='div' disablePadding>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label='Location' id='' required />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: '5px',
                  }}
                >
                  <TextField fullWidth label='Description' id='' required />
                  <Box
                    sx={{
                      width: '100%',
                      my: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Button> Delete</Button>
                    </Box>
                    <Box>
                      <Button>cancel</Button>
                      <Button variant='contained'>save</Button>
                    </Box>
                  </Box>
                </Box>
              </List>
            </Collapse>
          </Box>
          <Box sx={{ mt: '5px', bgcolor: 'white' }}>
            <ListItemButton
              sx={{
                position: 'fixed',
                bottom: '0px',
                m: '10px',
                bgcolor: 'white',
                width: '25%',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  bgcolor: 'white',
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Button>cancel</Button>
                <Button variant='contained'>save</Button>
              </Box>
            </ListItemButton>
          </Box>
        </Box>
      </StyleModal>
    </Box>
  );
}
