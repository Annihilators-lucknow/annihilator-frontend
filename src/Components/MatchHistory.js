import React,{useState,useEffect} from 'react'
import MatchCard from './MatchCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCricketMatch } from '../Store/Actions/cricket.action'
import FundUpdate from './Fund Section/FundUpdate'
import plusIcon from '../backgrounds/addition.png'
import HistoryCard from './Historycard'





const MatchHistory = ({setShowModal}) => {
    const dispatch = useDispatch()
    const tempAllMatch = useSelector((state) => state.cricketReducer.allMatches.data)
    const  historyRecord = useSelector((state) => state.cricketReducer.allMatches.matchHistoy)
     const [scoreCard, setScoreCard] = useState(false);

    useEffect(()=>{
     dispatch(getAllCricketMatch())
    },[])

    return <div className='content-center flex-col mt-l'>
         <div className="history-heading">
         <h1>Match histroy</h1>  
         <button className="btn edit-score mt-none" onClick={()=>setScoreCard(!scoreCard)}> <img className='inside-btn-img' src={plusIcon} />  Add Match Record</button>
         </div>
         <HistoryCard historyRecord={historyRecord}/>
        <MatchCard allCricketMatch={tempAllMatch}/>
        <FundUpdate setShowModal={setShowModal} scoreCard={scoreCard} setScoreCard={setScoreCard}/>
        </div>
}

 

export default MatchHistory