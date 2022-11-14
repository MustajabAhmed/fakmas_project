import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

export default function Sidebar() {
  return (
<>
    <Box sx={{width:"10%"}} p={2}>
      <Box position='fixed' sx={{width:"10%"}}>
        <List sx={{height:"65vh"}}>
          <ListItem disablePadding>
              <ListItemText primary={<Typography variant="h5" style={{marginBottom:"20px"}} >FAKMS</Typography>} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
               <ListItemText primary='Group' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>       
              <ListItemText primary='Drafts' />
            </ListItemButton>
          </ListItem>
          
        </List>
        <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Reports' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
               <ListItemText primary='Admin' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>


        
      </>
  );
}
