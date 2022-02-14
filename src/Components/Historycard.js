import React from 'react'
import winning from "../backgrounds/winning.png";
import lose from "../backgrounds/lose.png";

const HistoryCard = ({historyRecord}) => {
 return <div className='d-flex'>
       
        <div className="last">
                        <time></time>
                        <div className="score">
                            <div className="win">
                              
                                <img src={winning} alt="winlogo" />
                                <div className="lose-score">
                                    <h2>{historyRecord?.totalmatchWon}</h2>
                                    <span>{`${historyRecord?.wonPercentage}%`}</span>
                                </div>
                            </div>
                            <div className="lose">
                                 <div className="win-score">
                                    <h2>{historyRecord?.totalmatch - historyRecord?.totalmatchWon}</h2>
                                    <span>{`${100 - historyRecord?.wonPercentage }%`} </span>
                                </div>
                                <img src={lose} alt="winlogo" />
                            </div>
                        </div>
                        <span>{}</span>
         </div>
         <div className="last">
                        <time></time>
                        <div className="score">
                            <div className="win">
                                <img src={""} alt="winlogo" />
                                <div className="win-score">
                                    <h2>{}</h2>
                                    <span>{} </span>
                                </div>
                            </div>
                            <div className="lose">
                                <div className="lose-score">
                                    <h2>{}</h2>
                                    <span>{}</span>
                                </div>
                                <img src={""} alt="winlogo" />
                            </div>
                        </div>
                        <span>{}</span>
         </div>
       </div>
}
export default HistoryCard