import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from './Loader'
import _ from 'lodash'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MatchDetails = () => {
    const location = useLocation()
    const [MatchDetails , setMatchDetails] = useState(location.state.matchData)

    useEffect(()=>{
       setMatchDetails(location.state.matchData)
    },[location.state.matchData])

    const displayTitleText = () => {
        return <div  style={{fontSize:"24px"}}> <p>{`${MatchDetails.tossResult === "Lose"  ? MatchDetails.teamName : "Annihilator"} won the toss and choose to bat first`} </p></div>
    }

    const renderOpponentBatingRecord = () => {
            return <div className='d-flex' style={{fontSize:"24px",margin:"2rem 0 "}}>  <span style={{marginRight:"1rem"}}>Team Name : {MatchDetails.teamName}  </span>   <span style={{marginRight:"1rem"}}> Run Scored : {MatchDetails.opponentScore} </span> <span> Over Played  : {MatchDetails.opponentOver}</span> </div>
        
    }

    const renderAnnihilatorBowlingRecord = () => {
         return   <div className='d-flex flex-col'>
             <div className='text-800 '>Annihilator Bowling Record</div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <TableContainer sx={{ maxHeight: 440 }}>
                 <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    <TableCell>Player Name</TableCell>
                    <TableCell>Overs</TableCell>
                    <TableCell>Run Giver</TableCell>
                    <TableCell>Economy</TableCell>
                    <TableCell>Wicket Taken</TableCell>
                    </TableRow>
                </TableHead>
                
         <TableBody>
          {MatchDetails.individualrecord?.filter(ball => ball.overBowled > 0).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell>{row.overBowled}</TableCell>
              <TableCell>{row.runGiven}</TableCell>
              <TableCell>{parseInt(row.runGiven / row.overBowled)}</TableCell>
              <TableCell>{parseInt(row.wicketTaken)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
              </Table>
    </TableContainer>
    </Paper>
          </div>
        
    }
    
    const renderAnnihilatorBatingRecord = () => {
         return   <div className='d-flex flex-col'>
             <div className='text-800 mt-10'>Bating Record</div>
             {/* <div className='mb-24'><span>Annihilator Score </span> <span> {MatchDetails.annihilatorScore} / {MatchDetails.annihilatorOver}</span></div> */}
             <div className='mb-24' style={{fontSize:"24px",margin:"2rem 0 "}}>  <span style={{marginRight:"1rem"}}>Team Name : Annihilator Score  </span>   <span style={{marginRight:"1rem"}}> Run Scored : {MatchDetails.annihilatorScore} </span> <span> Over Played  : {MatchDetails.annihilatorOver}</span> </div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <TableContainer sx={{ maxHeight: 440 }}>
                 <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    <TableCell>Player Name</TableCell>
                    <TableCell>Runs</TableCell>
                    <TableCell>Ball taken</TableCell>
                    <TableCell>No of 6's</TableCell>
                    <TableCell>Strike Rate</TableCell>
                    </TableRow>
                </TableHead>
                
         <TableBody>
          {MatchDetails.individualrecord?.filter(ball => ball.ballPlayed > 0).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell>{row.notOut === "true" ?  `${row.runScored}*` : row.runScored} </TableCell>
              <TableCell>{row.ballPlayed}</TableCell>
              <TableCell>{row.sixes}</TableCell>
              <TableCell>{parseInt(row.runScored / row.ballPlayed * 100)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
              </Table>
    </TableContainer>
    </Paper>
          </div>
        
    }

    return  _.isEmpty(MatchDetails) ? <Loader/> :
     <> 
     <div className="last">
                       
                        <div className="score-details flex-col">
                         {/* <div> <span style={{fontWeight:800}}>Pitch Report   </span>Not a lot of grass on this surface, looks like a belter. Looks like a good surface with a bit of moisture in it. Once the early moisture is gone, it'll be good for batting.</div> */}
                         <div className='d-flex'>  { displayTitleText()} </div>
                         {MatchDetails.tossResult === "Lose" ? renderOpponentBatingRecord() : renderAnnihilatorBatingRecord()}
                          {MatchDetails.tossResult === "Lose" ? renderAnnihilatorBowlingRecord() : null}
                         {MatchDetails.tossResult === "Win" ? renderOpponentBatingRecord() :  renderAnnihilatorBatingRecord()}
                         {MatchDetails.tossResult === "Win" ? renderAnnihilatorBowlingRecord() : null}
                        </div>
                        
                    </div>

     </>
}

export default MatchDetails