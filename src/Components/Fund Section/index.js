import React,{useEffect} from 'react' ;
import FundUpdate from './FundUpdate';
import FundHistory from './Fundhistory';
import {getfundhistory } from '../../Store/Actions/cricket.action'
import { useSelector, useDispatch } from 'react-redux'


const Fund = ({setShowModal}) => {
    const dispatch=useDispatch()
    const fundHistory = useSelector(state => state.cricketReducer.fundHistory)

     useEffect(() => {
        dispatch(getfundhistory())
    }, [])

    return <> 
    <div style={{marginTop:"2%"}}>
        {/* <FundUpdate setShowModal={setShowModal}/> */}
       <FundHistory fundHistory={fundHistory}/>

    </div>
    
     </>
}

export default Fund