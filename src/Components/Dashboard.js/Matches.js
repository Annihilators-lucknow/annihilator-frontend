import React,{useState} from 'react'
import Box from '@mui/material/Box';
import MatchCard from '../MatchCard';
import FundUpdate from '../Fund Section/FundUpdate'
import plusIcon from '../../backgrounds/addition.png'
import Toolbar from '@mui/material/Toolbar';
const drawerWidth = 240;

const Matches = ({showModal,setShowModal}) => {
    const [scoreCard, setScoreCard] = useState(false);
    return <>
     <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
           <Toolbar />
          <div className="history-heading">
                <button className="btn edit-score mt-none" onClick={()=>setScoreCard(!scoreCard)}> <img className='inside-btn-img' src={plusIcon} />  Add Match Record</button>
                </div>
      <FundUpdate setShowModal={setShowModal} scoreCard={scoreCard} setScoreCard={setScoreCard}/>
        
      </Box>

    </>
}

export default Matches