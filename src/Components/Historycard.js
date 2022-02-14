import React from 'react'
import winning from "../backgrounds/winning.png";
import lose from "../backgrounds/lose.png";
import thumbsup from "../backgrounds/thumbup.png";
import thumbsdown from "../backgrounds/thumbsdown.png";


const changeTextColor = (number) => {
    return number < 34 ? "text-red" : number < 51 ? "text-orange"  : number < 71 ? "text-yellow" : "text-green"
}


const HistoryCard = ({historyRecord}) => {
 return <div className='res-d-flex'>
       
        <div className="last">
                         <span>{`Match Record`}</span>
                        <div className="score">
                            <div className="win">
                                <img src={winning} alt="winlogo" />
                                <div className="lose-score">
                                    <h2>{historyRecord?.totalmatchWon}</h2>
                                    <span className={changeTextColor(historyRecord?.wonPercentage)}>{`${historyRecord?.wonPercentage}%`}</span>
                                </div>
                            </div>
                            <div className="lose">
                                 <div className="win-score">
                                    <h2>{historyRecord?.totalmatch - historyRecord?.totalmatchWon}</h2>
                                    <span className={changeTextColor(100 - historyRecord?.wonPercentage )}>{`${100 - historyRecord?.wonPercentage }%`} </span>
                                </div>
                                <img src={lose} alt="winlogo" />
                            </div>
                        </div>
                         <div>{`Total matches ${historyRecord?.totalmatch}`}</div> 
         </div>
         <div className="last">
                           <span>{`Toss record`}</span>
                        <div className="score">
                            <div className="win">
                                <img src={thumbsup} alt="winlogo" />
                                <div className="win-score">
                                    <h2>{historyRecord?.totalTossWon}</h2>
                                      <span className={changeTextColor(historyRecord?.tossWinPercentage )}>{`${historyRecord?.tossWinPercentage }%`} </span>
                                </div>
                            </div>
                            <div className="lose">
                                <div className="lose-score">
                                    <h2>{historyRecord?.totalmatch - historyRecord?.totalTossWon}</h2>
                                    <span className={changeTextColor(100 - historyRecord?.tossWinPercentage )}>{`${100 - historyRecord?.tossWinPercentage }%`}</span>
                                </div>
                                <img src={thumbsdown} alt="winlogo" />
                            </div>
                        </div>
                        <div>{`Total matches ${historyRecord?.totalmatch}`}</div> 
         </div>
       </div>
}
export default HistoryCard