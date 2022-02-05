import React,{useEffect} from 'react' ;
import FundUpdate from './FundUpdate';
import FundHistory from './Fundhistory';
import {getFundBalance, getfundhistory } from '../../Store/Actions/cricket.action'
import { useSelector, useDispatch } from 'react-redux'


const Fund = ({setShowModal}) => {
    const dispatch=useDispatch()
    const fundHistory = useSelector(state => state.cricketReducer.fundHistory)
    const fundBalance = useSelector(state => state.cricketReducer.fundBalance)

     useEffect(() => {
        dispatch(getfundhistory())
        dispatch(getFundBalance())
    }, [])

    return <> 
    <div style={{marginTop:"2%"}}>
       <FundHistory fundHistory={fundHistory} fundBalance={fundBalance}/>

    </div>
    
     </>
}

export default Fund