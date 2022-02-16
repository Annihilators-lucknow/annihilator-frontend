import React from 'react'
import Box from '@mui/material/Box';
import MatchCard from '../MatchCard';
import Fund from '../Fund Section/index';
import Toolbar from '@mui/material/Toolbar';
const drawerWidth = 240;

const FundDetails = ({showModal,setShowModal}) => {
    return <>
     <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar/>
       <Fund setShowModal={setShowModal}/>
        
      </Box>

    </>
}

export default FundDetails