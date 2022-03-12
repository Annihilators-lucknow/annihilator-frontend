import React,{useState,useEffect} from 'react'
import MatchCard from './MatchCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCricketMatch,updateCricketMatchData } from '../Store/Actions/cricket.action'
import FundUpdate from './Fund Section/FundUpdate'
import plusIcon from '../backgrounds/addition.png'
import HistoryCard from './Historycard'
import Loader from './Loader'
import { useNavigate  } from "react-router-dom";





const MatchHistory = ({setShowModal}) => {
    const dispatch = useDispatch()
    const tempAllMatch = useSelector((state) => state.cricketReducer.allMatches.data)
    const  historyRecord = useSelector((state) => state.cricketReducer.allMatches.matchHistoy)
    const isLoading = useSelector((state)=>state.cricketReducer.isLoading)
    const [scoreCard, setScoreCard] = useState(false);
    const navigate = useNavigate()


    
      const onSaveClick = async (user) => {
        const payload = {
                data : user , 
                successCallBack : () => {
                     navigate('/')
                    }
                }
        dispatch(updateCricketMatchData(payload))
    }


    useEffect(()=>{
     dispatch(getAllCricketMatch())
    },[])


      const onCardClick = (matchData) => {
            //navigate( `/match-details/${id}`)
             navigate(`/match-details/${matchData._id}`, {
            state: { matchData}
             });
    }
    


 
    return <>
        {isLoading ? <Loader/> :
         <div className='content-center flex-col mt-l match-history'>
           
                <div className="history-heading">
                <h1>Match histroy</h1>  
                <button className="btn edit-score mt-none" onClick={()=>setScoreCard(!scoreCard)}> <img className='inside-btn-img' src={plusIcon} />  Add Match Record</button>
                </div>
                <div className="result w-70">
                <MatchCard allCricketMatch={tempAllMatch} setScoreCard={onCardClick}/>
                </div>
            <FundUpdate setShowModal={setShowModal} scoreCard={scoreCard} setScoreCard={setScoreCard} all={true} individualrecord={false} onSaveClick={onSaveClick}/>
             <HistoryCard historyRecord={historyRecord}/>
        </div>}
    </>
}

 

export default MatchHistory