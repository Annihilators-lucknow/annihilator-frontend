import React, { useState,useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Players } from "./Players"
import Modal from "./Modal";
import { GiTennisBall } from "react-icons/gi";
import bat from "../backgrounds/bat.png";
import batball from "../backgrounds/batball.png";
import { getAllCricketMatch } from '../Store/Actions/cricket.action'
import { useDispatch,useSelector } from 'react-redux';
import Loader from './Loader'



const Team = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch()
    const [playerData, setPlayerData] = useState({});
    const tempAllMatch = useSelector((state) => state.cricketReducer.allMatches?.data)
    const isLoading = useSelector((state) => state.cricketReducer.isLoading)
    const [momData,setMomData] = useState(tempAllMatch?.filter((item)=>item && item.ManofTheMatch && item.ManofTheMatch.playerName === playerData.playerName))
    const tempPlayersRecord = tempAllMatch?.map((item)=>( item.individualrecord))
    const [playerRecords,setPlayerRecords] = useState(tempPlayersRecord?.filter(x => x.playerName === playerData.playerName))
    const tempResult = [...new Set(tempPlayersRecord?.flat())]
   useEffect(()=>{
     dispatch(getAllCricketMatch())
   },[])

   useEffect(()=>{
      setMomData(tempAllMatch ? tempAllMatch.filter((item)=>item && item.ManofTheMatch && item.ManofTheMatch.playerName === playerData.name) : [])
      setPlayerRecords(tempResult?.filter(x => x.playerName === playerData.name))
   },[playerData])

    return (<>
        {isLoading ? <Loader/> :<>
            <div className={showModal ? "team active-blur" : "team"}>
                <Fade up><div className="team-intro">
                    <h1>Our Team</h1>
                </div></Fade>
                <div className="player-container">
                    <div className="player-container2">

                        {Players.map((player) => {
                            return (
                               player.isActive ?  <Flip right><div className="card-container noSelect" key={player.id} onClick={() => { setShowModal(!showModal); setPlayerData(player) }}>
                                    <div className="player-card">
                                        <div className="profile">
                                            <img src={player.image} alt="Profile Pic" />
                                        </div>
                                        {(player.speciality === 'Bowler') ? <GiTennisBall className='ball' /> : (player.speciality === 'Batsman' ? <img src={bat} alt="Batsman" className='bat' /> : <img src={batball} alt="All Rounder" className='batball' />)}
                                        <span className="player-card-name">{player.name}</span>
                                        </div>
                                    </div>
                                </Flip> : null
                                

                            )
                        })}

                    </div>

                </div>
            </div >

            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} playerData={playerData} tempAllMatch={tempAllMatch} momData={momData} playerRecords={playerRecords}/>}

        </>
    }
</>

    )
}

export default Team