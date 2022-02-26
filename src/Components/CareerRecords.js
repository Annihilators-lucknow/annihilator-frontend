import React from 'react'
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import batting from "../backgrounds/bating.png";
import bowling from '../backgrounds/bowling.png';

function detectMob() {
        return (window.innerWidth <= 800);
    }



const CareerRecords = ({momData,toggleState}) => {
    console.log("momData===",momData)
    return <>
    <div className={toggleState === 3 ? "second-slide active" : "hide"}>
                             {momData.length !== 0 &&
                                  <Carousel
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
                                                  {/* <time>{moment(momDataItem.date).format('Do MMMM YYYY ')}</time> */}
                                             </div>
                                             <div className="d-flex flex-row w-100 justify-between">
                                             {/* <div>{`${momDataItem.annihilatorScore.split('/').shift()} - ${momDataItem.annihilatorOver} / ${momDataItem.opponentScore.split('/').shift()} - ${momDataItem.opponentOver} `}</div>
                                             <div>{`Annihilators ${momDataItem.matchResult}`}</div> */}
                                             </div>
                                              {momDataItem.category === "Both" ?
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={batting} />
                                              <div className=""> {`${momDataItem.runScored} run - ${momDataItem.ballPlayed} ball (6 X ${ momDataItem.sixes || 0} & 4 X ${ momDataItem.fours || 0}) `}    </div>
                                              </div>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={bowling} />
                                                <div>{ ` ${momDataItem.overBowled} over - ${momDataItem.runGiven} run - ${momDataItem.wicketTaken} wicket` }   </div>
                                              </div>
                                              </> :  momDataItem.category === "Batting" ?
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={batting} />
                                              <div className=""> {`${momDataItem.runScored} run - ${momDataItem.ballPlayed} ball (6 X ${ momDataItem.sixes || 0} & 4 X ${ momDataItem.fours || 0}) `}    </div>
                                              </div>
                                              </> : 
                                              <>
                                               <div className="d-flex flex-row w-100 ">
                                                <img className="inside-btn-img" src={bowling} />
                                                <div>{ ` ${momDataItem.overBowled} over - ${momDataItem.runGiven} run - ${momDataItem.wicketTaken} wicket` }   </div>
                                              </div>
                                              </>

                                              }
                                             
                        
                                            </div>
                                })}
                                
                                 </Carousel>}

                              
                                
                                
                                <div > 
                   
                    </div> 
                    </div>
    </>
}

export default CareerRecords