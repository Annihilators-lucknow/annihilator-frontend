import React from 'react';
import Fade from 'react-reveal/Fade';
import winlogo from "../../backgrounds/teamlogo2.png";
import { Opponent } from "./../Oppenent";
import expense from './expense.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from 'moment'


const FundHistory = ({ fundHistory }) => {
    function detectMob() {
        return (window.innerWidth <= 800);
    }

    
    return <>
        <div className='content-center flex-col'>
         <div className="history-heading">
         <h1>Fund histroy</h1>  
         <button className="btn edit-score mt-none"> <img className='inside-btn-img' src={expense} /> Add Other Expense</button>
         </div>
        <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop ={false}
            emulateTouch={true}
            // autoPlay
            useKeyboardArrows
            transitionTime={1000}
            // axis="vertical"
            selectedItem={1}
            width={detectMob() ? "95vw" : "80vw"}
            centerMode={true}
            centerSlidePercentage={detectMob() ? 100 : 30}
        >

            {fundHistory && fundHistory.map((item) => {
                console.log(item)
                return <Fade left>
                    <div className="last">
                        <time>{moment(item.date).format('Do MMMM YYYY ')}</time>
                        <div className="score">
                            <div className="histroy-card">
                                <div>Type : <span className={item.expenseType === "credit" ? "font-green":"font-red"}>{item.expenseType}</span></div>
                                 <div>Expense Details : <span>{item.expenseDetails}</span></div>
                                 <div>Current Balance : <span className='current-balance'>{`${item.fundBalance} ₹`}</span></div>
                               
                            </div>
                            
                        </div>
                        
                    </div>
                </Fade>

            })}


        </Carousel>
        </div>


    </>
}

export default FundHistory