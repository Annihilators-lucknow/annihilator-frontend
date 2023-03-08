import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCricketMatch } from '../Store/Actions/cricket.action'
import { Players } from "./Players"
import Loader from './Loader'
import _ from 'lodash'
import winlogo from "../backgrounds/teamlogo2.png";
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import batting from "../backgrounds/bating.png";
import bowling from '../backgrounds/bowling.png';
import duckImg from '../backgrounds/duck.svg'
import CareerRecords from './CareerRecords';

function add(accumulator, a) {
    return accumulator + a;
}


const PlayerDetails = () => {
    const { playerName } = useParams();
    const dispatch = useDispatch()
    const tempAllMatch = useSelector((state) => state.cricketReducer.allMatches?.data)
    const tempPlayersRecord = tempAllMatch?.map((item) => (item.individualrecord))
    const [momData, setMomData] = useState(tempAllMatch?.filter((item) => item && item.ManofTheMatch && item.ManofTheMatch.playerName === playerName))
    const [playerRecords, setPlayerRecords] = useState(tempPlayersRecord?.filter(x => x.playerName === playerName))
    const tempResult = [...new Set(tempPlayersRecord?.flat())]
    const isLoading = useSelector((state) => state.cricketReducer.isLoading)
    const [playerData, setPlayerData] = useState({});
    const totalRuns = playerRecords?.map(player => parseInt(player?.runScored?.replaceAll("*", ''))).filter(value => !Number.isNaN(value)).reduce(add, 0)
    const totalInnings = playerRecords?.map(player => parseInt(player.runScored)).filter(value => !Number.isNaN(value)).length
    const strikeRate = Math.round(totalRuns / (playerRecords?.map(player => parseInt(player.ballPlayed)).filter(value => !Number.isNaN(value)).reduce(add, 0)) * 100)
    const totalWicket = playerRecords?.map(player => parseInt(player.wicketTaken)).filter(value => !Number.isNaN(value)).reduce(add, 0)
    const totalInningBowl = playerRecords?.map(player => parseInt(player.overBowled)).filter(value => !Number.isNaN(value)).length
    const runGiven = playerRecords?.map(player => parseInt(player.runGiven)).filter(value => !Number.isNaN(value)).reduce(add, 0)
    const numberOf50 = playerRecords?.map(player => parseInt(player.runScored)).filter(value => !Number.isNaN(value)).filter(x => x > 49).length
    const numberOf3WicketTaken = playerRecords?.map(player => parseInt(player.wicketTaken)).filter(value => !Number.isNaN(value)).filter(x => x > 2).length
    const numberOf6Sixes = playerRecords?.map(player => parseInt(player.sixes)).filter(value => !Number.isNaN(value)).reduce(add, 0)
    const [toggleState, setToggleState] = useState(1);
    const totalNotOutInnings = playerRecords?.filter(value => value.notOut ? value.notOut.includes("true") : "").length
    const average = Math.round(totalRuns / (totalInnings - totalNotOutInnings))
    const bowlingAverage = Math.round(runGiven / totalWicket)
    const bowlingEconomy = Math.round(runGiven / playerRecords?.map(player => parseInt(player.overBowled)).filter(value => !Number.isNaN(value)).reduce(add, 0))
    const tempbestBatingScore = playerRecords?.map(player => parseInt(player?.runScored)).filter(value => !Number.isNaN(value)).sort((a, b) => a - b)
    const bestBatingScore = tempbestBatingScore[tempbestBatingScore?.length - 1]
    const tempWicketTaken = playerRecords?.map(player => parseInt(player?.wicketTaken)).filter(value => !Number.isNaN(value)).sort((a, b) => a - b)
    const wicketTaken = tempWicketTaken[tempWicketTaken.length - 1]
    const bowlingBestPerformance = playerRecords?.filter(x => x.wicketTaken == wicketTaken)
    const addBowlingEconomy = bowlingBestPerformance.map(x => ({ ...x, economy: x.runGiven / x.overBowled }))
    const bestBowling = Object.assign({}, _.orderBy(addBowlingEconomy, ['economy'], ['asc'])[0])
    const bestBatingPerformanceObj = playerRecords?.filter(x => x.runScored == bestBatingScore)
    const bestBating = Object.assign({}, _.orderBy(bestBatingPerformanceObj, ['runScored'], ['dsc'])[0])
    const totalOverBowled = Math.round(playerRecords?.map(player => parseInt(player.overBowled)).filter(value => !Number.isNaN(value)).reduce(add, 0))
    const numbersOfDucks = playerRecords?.map(player => parseInt(player?.runScored?.replaceAll("*", ''))).filter(value => !Number.isNaN(value) && value === 0).length
    const numberOf30 = playerRecords?.map(player => parseInt(player.runScored)).filter(value => !Number.isNaN(value)).filter(x => x > 29).length

    const toggleTab = (index) => {
        setToggleState(index);
    }
    function detectMob() {
        return (window.innerWidth <= 800);
    }

    useEffect(() => {
        dispatch(getAllCricketMatch())
    }, [])

    useEffect(() => {
        setMomData(tempAllMatch ? tempAllMatch.filter((item) => item && item.ManofTheMatch && item.ManofTheMatch.playerName === playerName) : [])
        setPlayerRecords(tempResult?.filter(x => x.playerName === playerName))
        setPlayerData(Object.assign({}, Players.filter((x) => x.name === playerName)[0]))
    }, [tempAllMatch])

    return isLoading ? <Loader /> :
        <>
            <div id="about" key={playerData.id} className="player-modal">
                <form className="about-form" >

                    <div className="about-link">
                        <div className="image">
                            <div className="profile-info">
                                <img style={{ borderRadius: "50%" }} src={playerData.image} alt="profile pic" />
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

                            {/* <button onClick={() => setShowModal(false)} className="btn cancel">Cancel</button> */}

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
                                    <label className="userid">Innings Played</label>
                                    <p className="profession">{parseInt(totalInnings)}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Runs</label>
                                    <p className="profession">{totalRuns}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Average</label>
                                    <p className="profession">{isNaN(average) || !isFinite(average) ? totalRuns : average}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">No of 50's</label>
                                    <p className="profession">{numberOf50 ? numberOf50 : 0}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">No of 30's</label>
                                    <p className="profession">{numberOf30 ? numberOf30 : 0}</p>
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
                                    <label className="userid">Number's of <span><img style={{ width: "20px", height: "20px" }} src={duckImg} /></span></label>
                                    <p className="profession">{numbersOfDucks}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Highest score</label>
                                    <p className="profession">{!_.isEmpty(bestBating) ? `${bestBating.runScored} run / ${bestBating.ballPlayed} ball` : ""}</p>
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
                                    <p className="profession">{isNaN(bowlingEconomy) || !isFinite(bowlingEconomy) ? 0 : bowlingEconomy}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">No of 3 and more wicket taken</label>
                                    <p className="profession">{isNaN(numberOf3WicketTaken) ? 0 : numberOf3WicketTaken}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Total over bowled</label>
                                    <p className="profession">{isNaN(totalOverBowled) ? 0 : totalOverBowled}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Best Bowling Performance</label>
                                    <p className="profession "> <abbr title="Over / Run / Wicket">{!_.isEmpty(bestBowling) ? `${bestBowling.overBowled} / ${bestBowling.runGiven} / ${bestBowling.wicketTaken}` : ""}</abbr></p>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "second-slide active" : "hide"}>
                                {momData.length === 0 ? <>

                                    <div className="detail-field align-center">
                                        Nothing to Display
                                    </div>
                                </> : <Carousel
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
                                    {momData && momData.map((momDataItem) => {

                                        return <div className="last ml-unset" style={{ marginLeft: "0.5rem" }}>
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
                                                        <div className=""> {`${momDataItem.ManofTheMatch.runScored} run - ${momDataItem.ManofTheMatch.ballPlayed} ball (6 X ${momDataItem.ManofTheMatch.sixes || 0} & 4 X ${momDataItem.ManofTheMatch.fours || 0}) `}    </div>
                                                    </div>
                                                    <div className="d-flex flex-row w-100 ">
                                                        <img className="inside-btn-img" src={bowling} />
                                                        <div>{` ${momDataItem.ManofTheMatch.overBowled} over - ${momDataItem.ManofTheMatch.runGiven} run - ${momDataItem.ManofTheMatch.wicketTaken} wicket`}   </div>
                                                    </div>
                                                </> : momDataItem.ManofTheMatch.category === "Batting" ?
                                                    <>
                                                        <div className="d-flex flex-row w-100 ">
                                                            <img className="inside-btn-img" src={batting} />
                                                            <div className=""> {`${momDataItem.ManofTheMatch.runScored} run - ${momDataItem.ManofTheMatch.ballPlayed} ball (6 X ${momDataItem.ManofTheMatch.sixes || 0} & 4 X ${momDataItem.ManofTheMatch.fours || 0}) `}    </div>
                                                        </div>
                                                    </> :
                                                    <>
                                                        <div className="d-flex flex-row w-100 ">
                                                            <img className="inside-btn-img" src={bowling} />
                                                            <div>{` ${momDataItem.ManofTheMatch.overBowled} over - ${momDataItem.ManofTheMatch.runGiven} run - ${momDataItem.ManofTheMatch.wicketTaken} wicket`}   </div>
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
                                <CareerRecords momData={playerRecords} toggleState={toggleState} />
                            </>}
                        </div>

                    </div>
                </form>
            </div>

        </>
}

export default PlayerDetails