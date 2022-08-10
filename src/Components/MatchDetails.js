import React, { useEffect, useState } from 'react'
import { useLocation ,useParams } from 'react-router-dom'
import Loader from './Loader'
import _ from 'lodash'
import { useSelector,useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {displayConclusionText} from '../constant/utils'
import {getMatchDetails} from '../Store/Actions/cricket.action'
import plusIcon from '../backgrounds/addition.png'
import FundUpdate from './Fund Section/FundUpdate'
import { toast } from 'react-toastify';



const MatchDetails = () => {
    const location = useLocation()
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
    const {matchId} = useParams();
    const [MatchDetails , setMatchDetails] = useState(location.state.matchData)
       const [scoreCard, setScoreCard] = useState(false);
     console.log(matchId)
    useEffect(()=>{
       setMatchDetails(location.state.matchData)
        // dispatch(getMatchDetails(matchId))
    },[location.state.matchData])


    console.log("scoreCard===",scoreCard)


   

    const displayTitleText = () => {
        return <div  style={{fontSize:"24px"}}> <p>{`${MatchDetails.tossResult === "Lose"  ? MatchDetails.teamName : "Annihilator"} won the toss and choose to bat first`} </p></div>
    }


     const onSaveClick = (data ,initaiStateMom ,setMomData) => {
        const tempObject = Object.assign({},...data.individualrecord)
        let tempData = ({...MatchDetails ,individualrecord: [...MatchDetails.individualrecord ] })
        if(tempData.individualrecord.some(x => x?.playerName === tempObject?.playerName)){
            toast.warning("Your date for this match is already exist please contact to admin")
        } else {
            tempData = ({...MatchDetails ,individualrecord: [...MatchDetails.individualrecord ,data.ManofTheMatch]})
            console.log("tempData===",tempData)
            //  const payload = {
            //      data : tempData , 
            //      successCallBack : () => {
            //          setScoreCard(false)
            //          setMomData(initaiStateMom)
            //         }
            //     }
              
                // dispatch(updatePlayersRecord(payload))

         }
    }    

    console.log("MatchDetails===",MatchDetails)

  

  const renderOpponentBatingRecord = () => {
            return <div className='oponentCard'>
                 <div className='d-flex justify-center w-100 br-bottom min-height-50'>
                 <div className='pl-3p text-800'>Opponent Score </div>
                </div>
                <div className='d-flex justify-between w-100 br-bottom min-height-50'>
                 <div className='pl-3p'>Team </div>
                <div className='pr-3p'>{MatchDetails.teamName}</div>
                </div>
                <div className="d-flex justify-between w-100 br-bottom min-height-50">
                <div className='pl-3p'>Run Scored </div>
                <div className='pr-3p'>{MatchDetails.opponentScore}</div>
                </div>
                <div className="d-flex justify-between w-100 br-bottom min-height-50">
                <div className='pl-3p'>Over Played</div>
                <div className='pr-3p'>{MatchDetails.opponentOver}</div>
                </div>
                 
                 </div>
        
    }

    const renderAnnilatoresBatingRecord = () => {
            return <div className='oponentCard'>
                <div className='d-flex justify-center w-100 br-bottom min-height-50'>
                 <div className='pl-3p text-800'>Our Score</div>
                </div>
                <div className='d-flex justify-between w-100 br-bottom min-height-50'>
                 <div className='pl-3p'>Team </div>
                <div className='pr-3p'>Annihilator</div>
                </div>
                <div className="d-flex justify-between w-100 br-bottom min-height-50">
                <div className='pl-3p'>Run Scored </div>
                <div className='pr-3p'>{MatchDetails.annihilatorScore} </div>
                </div>
                <div className="d-flex justify-between w-100 br-bottom min-height-50">
                <div className='pl-3p'>Over Played</div>
                <div className='pr-3p'>{MatchDetails.annihilatorOver}</div>
                </div>
                 
                 </div>
        
    }

    const renderAnnihilatorBowlingRecord = () => {
         return   <div className='d-flex flex-col'>
             <div className='text-800 mx-1'>Annihilator Bowling Record</div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <TableContainer sx={{ maxHeight: 440 }}>
                 <Table  stickyHeader aria-label="sticky table">
                <TableHead style={{color:"color: #06083b"}}>
                    <TableRow>
                    <TableCell  style={{minWidth:"130px",fontWeight:"600",color:"color: #06083b",zIndex:"800" , position: 'sticky',left: 0,background: 'white'}}>Player Name</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Overs</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Run Giver</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Economy</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Wicket Taken</TableCell>
                    </TableRow>
                </TableHead>
                
         <TableBody>
          {MatchDetails.individualrecord?.filter(ball => ball.overBowled > 0).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell component="th" scope="row" style={{zIndex:"800" , position: 'sticky',left: 0,background: 'white',}}>
                {row.playerName}
              </TableCell>
              <TableCell>{row.overBowled}</TableCell>
              <TableCell>{row.runGiven}</TableCell>
              <TableCell>{Number(row.runGiven / row.overBowled).toFixed(2)}</TableCell>
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
             {renderAnnilatoresBatingRecord()}
              <div className='text-800 mx-1'>Annihilator Player's Record</div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <TableContainer sx={{ maxHeight: 440 }}>
                 <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow >
                    <TableCell  style={{minWidth:"130px",fontWeight:"600",color:"color: #06083b",zIndex:"1" , position: 'sticky',left: 0,background: 'white'}}>Player Name</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Runs</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Ball taken</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>No of 6's</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Strike Rate</TableCell>
                    </TableRow>
                </TableHead>
                
         <TableBody>
          {MatchDetails.individualrecord?.filter(ball => ball.ballPlayed > 0).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ background: 'white' }}
            >
              <TableCell component="th" scope="row" style={{zIndex:"1" , position: 'sticky',left: 0,background: 'white',}}>
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
     <div className="last box-shadow-none">
                       
                        <div className="score-details flex-col">
                         {/* <div> <span style={{fontWeight:800}}>Pitch Report   </span>Not a lot of grass on this surface, looks like a belter. Looks like a good surface with a bit of moisture in it. Once the early moisture is gone, it'll be good for batting.</div> */}
                          {/* <button className="btn edit-score mt-none"  onClick={() => setScoreCard(!scoreCard)} > <img className='inside-btn-img' src={plusIcon} />  Add Match Record</button> */}
                         <div className='d-flex'>  { displayTitleText()} </div>
                         {MatchDetails.tossResult === "Lose" ? renderOpponentBatingRecord() : renderAnnihilatorBatingRecord()}
                          {MatchDetails.tossResult === "Lose" ? renderAnnihilatorBowlingRecord() : null}
                         {MatchDetails.tossResult === "Win" ? renderOpponentBatingRecord() :  renderAnnihilatorBatingRecord()}
                         {MatchDetails.tossResult === "Win" ? renderAnnihilatorBowlingRecord() : null}
                          <div className='d-flex mt-10'>  { displayConclusionText(MatchDetails)} </div>
                        </div>
                        
                    </div>

       <><FundUpdate setShowModal={setScoreCard} scoreCard={scoreCard} setScoreCard={setScoreCard} individualrecord={true} onSaveClick={onSaveClick} headers="Player's match record" radioText="individual record"/></>

     </>
}

export default MatchDetails