import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import winlogo from "../backgrounds/teamlogo2.png";
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import batting from "../backgrounds/bating.png";
import bowling from '../backgrounds/bowling.png';
import CareerRecords from './CareerRecords';
import { Players } from './Players';

function add(accumulator, a) {
    return accumulator + a;
    }


const Modal = ({ setShowModal, playerData ,tempAllMatch ,momData ,playerRecords}) => {
    const totalRuns = playerRecords?.map(player => parseInt(player?.runScored?.replaceAll("*", ''))).filter(value => !Number.isNaN(value)).reduce(add, 0)
    const totalInnings = playerRecords?.map(player => parseInt(player.runScored)).filter(value => !Number.isNaN(value)).length
    const strikeRate = Math.round(totalRuns /  (playerRecords?.map(player => parseInt(player.ballPlayed)).filter(value => !Number.isNaN(value)).reduce(add, 0)) * 100  ) 
    const totalWicket = playerRecords?.map(player => parseInt(player.wicketTaken)).filter(value => !Number.isNaN(value)).reduce(add , 0)
    const totalInningBowl = playerRecords?.map(player => parseInt(player.overBowled)).filter(value => !Number.isNaN(value)).length
    const runGiven = playerRecords?.map(player => parseInt(player.runGiven)).filter(value => !Number.isNaN(value)).reduce(add,0)
    const numberOf50 = playerRecords?.map(player => parseInt(player.runScored)).filter(value => !Number.isNaN(value)).filter(x => x > 49).length
    const numberOf3WicketTaken = playerRecords?.map(player => parseInt(player.wicketTaken)).filter(value => !Number.isNaN(value)).filter(x => x > 3).length
    const numberOf6Sixes = playerRecords?.map(player => parseInt(player.sixes)).filter(value => !Number.isNaN(value)).reduce(add,0)
    const [toggleState, setToggleState] = useState(1);
    const totalNotOutInnings = playerRecords?.filter(value => value.runScored ? value.runScored.includes("*") : "").length
    const average = Math.round(totalRuns / (totalInnings -totalNotOutInnings) )
    const bowlingAverage =   Math.round(runGiven / totalWicket)
    const bowlingEconomy  = Math.round(runGiven / playerRecords?.map(player => parseInt(player.overBowled)).filter(value => !Number.isNaN(value)).reduce(add,0))
    
   





    



    const toggleTab = (index) => {
        setToggleState(index);
    }
    function detectMob() {
        return (window.innerWidth <= 800);
    }


    // console.log("totalBalls===",strikeRate  , "totalWicket===",totalWicket ,"totalInningBowl===",totalInningBowl  ,"numberOf50===",numberOf50  ,"average===",average  , "bowlingAverage===",bowlingAverage ,"3===",numberOf3WicketTaken ,"numberOf6Sixes===",numberOf6Sixes ,"bowlingEconomy====",bowlingEconomy)

    return (
        <Fade up>
            <div id="about" key={playerData.id} className="player-modal">
                <form className="about-form" >

                    <div className="about-link">
                        <div className="image">
                            <div className="profile-info">
                                <img src={playerData.image} alt="profile pic" />
                            </div>
                        </div>
                        <div className="link-container">
                            <h4>SOCIAL LINKS</h4>

                            <a href={playerData.instagram} target="_blank" rel="noreferrer">Instagram</a>
                            <a href={playerData.facebook} target="_blank" rel="noreferrer">Facebook</a>
                            <a href={playerData.twitter} target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>

                    <div className="about-details">
                        <div className="rank">
                            <div className="rank-container">
                                <h3>{playerData.name}</h3>
                                <h4>{playerData.speciality}</h4>
                                <p>RANKING: <span>1/10</span></p>
                            </div>

                            <button onClick={() => setShowModal(false)} className="btn cancel">Cancel</button>

                        </div>

                        <div className="timeline-container">
                            <nav className="timeline-navbar">
                                <ul>
                                    <li><label onClick={() => toggleTab(1)} className={toggleState === 1 ? "default default-active" : "default"}>About</label></li>
                                    <li><label onClick={() => toggleTab(2)} className={toggleState === 2 ? "timeline timeline-active" : "timeline"}>{detectMob() ? `Mom` : `Man of the matches`}</label></li>
                                     <li><label onClick={() => toggleTab(3)} className={toggleState === 3 ? "timeline timeline-active" : "timeline"}>Career record</label></li>
                                </ul>
                            </nav>

                            <div id="" className={` overflow-y  ${toggleState === 1 ? "first-slide active" : "hide"}`}>
                                <div className="detail-field">
                                    <label className="userid">Matches</label>
                                    <p className="profession">{parseInt(playerRecords?.length)}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid card-heading">Bating Record</label>
                                   
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Runs</label>
                                    <p className="profession">{totalRuns}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Average</label>
                                    <p className="profession">{isNaN(average) || !isFinite(average) ? 0 : average}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">No of 50's</label>
                                    <p className="profession">{numberOf50 ? numberOf50 : 0}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Strike Rate</label>
                                    <p className="profession">{isNaN(strikeRate) || !isFinite(average) ? 0 : strikeRate}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Number of 6 hit</label>
                                    <p className="profession">{isNaN(numberOf6Sixes) ? 0 : numberOf6Sixes}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid card-heading">Bowling Record</label>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Wicket</label>
                                    <p className="profession">{totalWicket}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Bowling Average</label>
                                    <p className="profession">{isNaN(bowlingAverage) || !isFinite(bowlingAverage) ? 0 : bowlingAverage}</p>
                                </div>
                                 <div className="detail-field">
                                    <label className="userid">Economy</label>
                                    <p className="profession">{isNaN(bowlingEconomy) || !isFinite(bowlingEconomy)? 0 : bowlingEconomy}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">No of 3 and more wicket taken</label>
                                    <p className="profession">{isNaN(numberOf3WicketTaken) ? 0 : numberOf3WicketTaken}</p>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "second-slide active" : "hide"}>
                             {momData.length === 0 ? <>
                            
                             <div className="detail-field">
                                    <label className="userid">Experience</label>
                                    <p className="profession">Expert</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Hourly Rate</label>
                                    <p className="profession">10$/hr</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Total Projects</label>
                                    <p className="profession">16</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">English Level</label>
                                    <p className="profession">Expert</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Availability</label>
                                    <p className="profession">Weekends</p>
                                </div>
                                 </> :  <Carousel
                                            showThumbs={true}
                                            showStatus={false}
                                            infiniteLoop={false}
                                            emulateTouch={true}
                                            // autoPlay
                                            swipeScrollTolerance={5}
                                            useKeyboardArrows
                                            transitionTime={1000}
                                            // axis="vertical"
                                            // selectedItem={1}
                                            width={detectMob() ? "95vw" : "30vw"}
                                            centerMode={true}
                                            centerSlidePercentage={detectMob() ? 100 : 50}
                                        >
                                 {momData && momData.map((momDataItem)=>{
                                   
                                    return  <div className="last ml-unset" style={{marginLeft:"0.5rem"}}>
                                             <div>
                                                  <time>{moment(momDataItem.date).format('Do MMMM YYYY ')}</time>
                                             </div>
                                             <div className="d-flex flex-row w-100 justify-between">
                                             <div>{`${momDataItem.annihilatorScore.split('/').shift()} - ${momDataItem.annihilatorOver} / ${momDataItem.opponentScore.split('/').shift()} - ${momDataItem.opponentOver} `}</div>
                                             <div>{`Annihilators ${momDataItem.matchResult}`}</div>
                                             </div>
                                              {momDataItem.ManofTheMatch.category === "Both" ?
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={batting} />
                                              <div className=""> {`${momDataItem.ManofTheMatch.runScored} run - ${momDataItem.ManofTheMatch.ballPlayed} ball (6 X ${ momDataItem.ManofTheMatch.sixes || 0} & 4 X ${ momDataItem.ManofTheMatch.fours || 0}) `}    </div>
                                              </div>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={bowling} />
                                                <div>{ ` ${momDataItem.ManofTheMatch.overBowled} over - ${momDataItem.ManofTheMatch.runGiven} run - ${momDataItem.ManofTheMatch.wicketTaken} wicket` }   </div>
                                              </div>
                                              </> :  momDataItem.ManofTheMatch.category === "Batting" ?
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={batting} />
                                              <div className=""> {`${momDataItem.ManofTheMatch.runScored} run - ${momDataItem.ManofTheMatch.ballPlayed} ball (6 X ${ momDataItem.ManofTheMatch.sixes || 0} & 4 X ${ momDataItem.ManofTheMatch.fours || 0}) `}    </div>
                                              </div>
                                              </> : 
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={bowling} />
                                                <div>{ ` ${momDataItem.ManofTheMatch.overBowled} over - ${momDataItem.ManofTheMatch.runGiven} run - ${momDataItem.ManofTheMatch.wicketTaken} wicket` }   </div>
                                              </div>
                                              </>

                                              }
                                             
                        
                                            </div>
                                })}
                                
                                 </Carousel>}

                              
                                
                                
                                    <div > 
                   
                             </div> 
                            </div> 
                            {toggleState === 3 && <>
                             <CareerRecords momData={playerRecords} toggleState={toggleState}/>
                            </>}
                        </div> 

                    </div> 
                </form>
            </div>
        </Fade>
    )
}

export default Modal
