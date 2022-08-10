import React,{useState} from 'react'
import _ from 'lodash'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function PlayerRanking({allCricketMatch}) {
    function getRanking() {
        let result = []
        const finalRecord = []
        let tempNumber , sixes , ballPlayed , fours ,overBowled , runGiven ,wicketTaken
         
        const allMatch1 = allCricketMatch?.map(x => x.individualrecord)
        for(let ele of allMatch1){
          for(let innerEle of ele){
           result.push(innerEle)
          }
        }
        let grouped = _.mapValues(_.groupBy(result, 'playerName'),
        clist => clist.map(players => _.omit(players, 'playerName')));
        let singleRecord = new Array
        
        for(let player in grouped){
          if(player){
           for(let element of grouped[player]){
            if(singleRecord[player]){
              // calculate last 5 match data 
            
              tempNumber = Number(singleRecord[player][0].runScored)
              tempNumber += Number(element.runScored)
              ballPlayed = Number(singleRecord[player][0].ballPlayed)
              ballPlayed += Number(element.ballPlayed)
              sixes = Number(singleRecord[player][0].sixes)
              sixes += Number(element.sixes)
              fours = Number(singleRecord[player][0].fours)
              fours += Number(element.fours)
              overBowled = Number(singleRecord[player][0].overBowled)
              overBowled += Number(element.overBowled)
              runGiven = Number(singleRecord[player][0].runGiven)
              runGiven += Number(element.runGiven)
              wicketTaken = Number(singleRecord[player][0].wicketTaken)
              wicketTaken += Number(element.wicketTaken)
             
              // adding last 5 match data 

             singleRecord[player][0].runScored = tempNumber
             singleRecord[player][0].ballPlayed = ballPlayed
             singleRecord[player][0].sixes = sixes
             singleRecord[player][0].fours = fours
             singleRecord[player][0].overBowled = overBowled
             singleRecord[player][0].runGiven = runGiven
             singleRecord[player][0].wicketTaken = wicketTaken

             
             if(element.runScored !=="") {
               singleRecord[player][0].battingIng += 1
              singleRecord[player][0].notOutCount += element.notOut  === true  || element.notOut === "true" ? 1 : 0
             }
            } else {
              const temp = [... singleRecord ,{...element ,runScored : Number(element.runScored) , ballPlayed : Number(element.ballPlayed), playerName : player ,battingIng : 1 ,notOutCount : element.notOut  === true  || element.notOut === "true" ? 1 : 0}]
              singleRecord[player] = [...temp]

              // singleRecord = [...temp]
            }
           }
          }
          
        }
        for(let players in singleRecord) {
       for(let playersRecords of singleRecord[players]) {
         finalRecord.push(playersRecords)
       }
      }

      return  _.sortBy( finalRecord, 'runScored' ).reverse()
      }

      const playerData = getRanking()

    //   console.log(playerData)

    return <div className='ranking-container'>
      <div style={{margin:"1rem 0.5rem"}}  className='text-800 mx-1'>Last 10 Batting Player's Record</div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                 <TableContainer sx={{ maxHeight: 440 }}>
                 <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow >
                    <TableCell  style={{minWidth:"130px",fontWeight:"600",color:"color: #06083b",zIndex:"1" , position: 'sticky',left: 0,background: 'white'}}>Player Name</TableCell>
                    <TableCell  style={{minWidth:"30px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Ranking</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Runs</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Ball taken</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>No of Ing's</TableCell>
                     <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>No of Notout</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>No of 6's</TableCell>
                    <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Strike Rate</TableCell>
                     <TableCell style={{minWidth:"100px",fontWeight:"600",color:"color: #06083b",zIndex:"0"}}>Average</TableCell>
                    </TableRow>
                </TableHead>
                
         <TableBody>
          {playerData.map((row,index) => (
           
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ background: 'white' }}
            >
               
              <TableCell component="th" scope="row" style={{zIndex:"0" , position: 'sticky',left: 0,background: 'white',}}>
                {row.playerName}
              </TableCell>
               <TableCell>
                {index + 1}
              </TableCell>
              <TableCell>{row.runScored} </TableCell>
              <TableCell>{row.ballPlayed}</TableCell>
              <TableCell>{row.battingIng}</TableCell>
               <TableCell>{row.notOutCount}</TableCell>
              <TableCell>{row.sixes}</TableCell>
              <TableCell>{parseInt(row.runScored / row.ballPlayed * 100)}</TableCell>
               <TableCell>{Math.round(row.runScored / (row.battingIng - row.notOutCount))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
              </Table>
    </TableContainer>
    </Paper>
         
    </div>
}

export default  PlayerRanking