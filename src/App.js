import { Box, Stack} from '@mui/material';
import Addpost from './components/Addpost';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useState } from 'react';

function App() {

  return (

      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar/>
          <Feed />
        <Addpost />
        </Stack>
      </Box>
  )
}

export default App;
