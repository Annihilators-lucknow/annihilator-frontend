import React from 'react';
import Fade from 'react-reveal/Fade';
import winlogo from "../backgrounds/teamlogo2.png";
import { Opponent } from "./Oppenent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from 'moment'


const MatchCard = ({ allCricketMatch }) => {
    function detectMob() {
        return (window.innerWidth <= 800);
    }

    return <>

        <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            emulateTouch={true}
            // autoPlay
            useKeyboardArrows
            transitionTime={1000}
            // axis="vertical"
            // selectedItem={1}
            width={detectMob() ? "95vw" : "80vw"}
            centerMode={true}
            centerSlidePercentage={detectMob() ? 100 : 50}
        >
            {allCricketMatch && allCricketMatch.map((item) => {
                return <Fade left>
                    <div className="last">
                        <time>{moment(item.date).format('Do MMMM YYYY ')}</time>
                        <div className="score">
                            <div className="win">
                                <img src={winlogo} alt="winlogo" />
                                <div className="win-score">
                                    <h2>{`${item.annihilatorScore}`}</h2>
                                    <span>{`${item.annihilatorOver} over`}</span>
                                </div>
                            </div>
                            <div className="lose">
                                <div className="lose-score">
                                    <h2>{item.opponentScore}</h2>
                                    <span>{`${item.opponentOver} over`}</span>
                                </div>
                                <img src={Opponent[0].url} alt="winlogo" />
                            </div>
                        </div>
                        <span>{`Annihilators ${item.matchResult}`}</span>
                    </div>
                </Fade>

            })}


        </Carousel>


    </>
}

export default MatchCard