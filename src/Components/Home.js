import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { useMediaQuery } from 'react-responsive'
import { Opponent } from "./Oppenent";
import { FaQuoteLeft } from "react-icons/fa";
import cricketbg from "../backgrounds/cricketbg.jpg";
import { useSelector, useDispatch } from 'react-redux'
import { getAllCricketMatch } from '../Store/Actions/cricket.action'
import MatchCard from './MatchCard';

const Home = ({ setShowModal }) => {
    const dispatch = useDispatch()
    const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
    const tempAllMatch = useSelector((state) => state.cricketReducer.cricketData)

    const [allCricketMatch, setAllCricketMatch] = useState(tempAllMatch);

    useEffect(() => {
        setShowModal(false);
        dispatch(getAllCricketMatch())
    }, [setShowModal])

    useEffect(() => {
        setAllCricketMatch(tempAllMatch)
    }, [tempAllMatch])

    return (
        <div className="home">

            <Fade up>
                <div className="welcome-box">
                    <div className="bat-ball">
                        <h1>Cricket is the most wonderful entertainment in the world</h1>
                        <p>The fans can make you famous.<br />
                            A contract can make you rich.<br />
                            The press can make you a superstar.<br />
                            But only love can make you a player.</p>
                        <a href="https://www.sportsfeelgoodstories.com/cricket-slogans-sayings-and-mottos/" target="_blank" rel="noreferrer" ><button className="btn">View More</button></a>

                    </div>
                </div>
            </Fade>

            <Fade up>
                <div className="parent">
                    <div className="match-container">
                        <h1>Last Match Result</h1>
                        <div className="result">
                            <MatchCard allCricketMatch={allCricketMatch} />
                        </div>
                    </div>
                </div>
            </Fade>

            <div className="about-section">
                <div className="about-container">
                    <Fade up><div className="image_section">
                        <img src={cricketbg} alt="stadium background" />
                    </div></Fade>
                    <Fade up><div className="about">
                        <h1>About Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            {isMobile ? "" : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years."}</p>
                        <div><button className="btn">READ MORE</button></div>
                    </div></Fade>
                </div>
            </div>

            <Fade up><div className="testimonial">
                <h1>Testimonials From Our Players</h1>
                <div className="player-content">
                    <Fade left><div className="player1">
                        <FaQuoteLeft className="quote" />
                        <p>Thank you for letting me be a part of such a fantastic team! Being a captain for this team is much more than just work, it is an unforgettable experience that will stay with me for the rest of my life.</p>
                        <div className="player-name">
                            <h3>Minhaj Ahmad Khan &nbsp;</h3><span>/ Captain</span>
                        </div>
                    </div></Fade>
                    <Fade right><div className="player2">
                        <FaQuoteLeft className="quote" />
                        <p>Thank you for letting me be a part of such a fantastic team! Being a vice-captain for this team is much more than just work, it is an unforgettable experience that will stay with me for the rest of my life.</p>
                        <div className="player-name">
                            <h3>Osama Hannan &nbsp;</h3><span>/ Vice Captain</span>
                        </div>
                    </div></Fade>
                </div>
            </div></Fade>

            <div className="opponent-teams">
                <h1>Our Opponent Teams</h1>
                <div className="logo-section">

                    {Opponent.map(opponent => {
                        return (
                            <Flip right><div className="column noSelect">
                                <div className="logos">
                                    <img src={opponent.url} alt="team_logo 7" />
                                    <h2>{opponent.name}</h2>
                                </div>
                            </div></Flip>

                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default Home