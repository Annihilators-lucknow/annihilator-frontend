import React from 'react';
import Fade from 'react-reveal/Fade';
import winlogo from "../backgrounds/teamlogo2.png";
import { Opponent } from "./Oppenent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from 'moment'
import {displayConclusionText} from '../constant/utils'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";



const MatchCard = ({ allCricketMatch ,setScoreCard}) => {
    function detectMob() {
        return (window.innerWidth <= 800);
    }

    return <>

        <Swiper
        slidesPerView={detectMob() ? 1 : 2}
        spaceBetween={15}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        speed={500}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        onClick={(swiper)=>setScoreCard(allCricketMatch[swiper.activeIndex])}
        >
            {allCricketMatch && allCricketMatch.map((item) => {
                return <SwiperSlide> 
                    <div className="last mx-auto" style={{maxWidth:"500px"}}>
                        <div className='d-flex justify-between w-100'>
                             <time>{moment(item.date).format('Do MMMM YYYY ')}</time>
                             {item.matchResult === "Win" &&<div className='text-green'>{item.ManofTheMatch?.playerName}</div>}
                        
                        </div> 
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
                        <span>{displayConclusionText(item ,"14px")}</span>
                    </div>
                </SwiperSlide>

            })}


        </Swiper>


    </>
}

export default MatchCard