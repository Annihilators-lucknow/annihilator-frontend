import { GET_CRICKET_MATCH_DATA_START, GET_CRICKET_MATCH_DATA_SUCCESS, GET_CRICKET_MATCH_DATA_FAILED, GET_FUND_BALANCE_DATA_START, GET_FUND_BALANCE_DATA_SUCCESS, GET_FUND_BALANCE_DATA_FAILED,
  GET_FUND_HISTORY_START,
  GET_FUND_HISTORY_SUCCESS,
  GET_FUND_HISTORY_FAILED ,
  GET_ALL_CRICKET_MATCH_START,
  GET_ALL_CRICKET_MATCH_SUCCESS,
  GET_ALL_CRICKET_MATCH_FAILED,
    UPDATE_FUND_BALANCE_START,
  UPDATE_FUND_BALANCE_SUCCESS,
  UPDATE_FUND_BALANCE_FAILED,
  FETCH_MATCH_DETAILS_START,
  FETCH_MATCH_DETAILS_SUCCESS,
  FETCH_MATCH_DETAILS_FAILDED
} from '../../constant/actiontype';

const initialState = {
  cricketData: [],
  tokens: [],
  isLoading: false,
  error: [],
  fundBalance: [],
  fundHistory:[],
  allMatches : [],
  matchDetails:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRICKET_MATCH_DATA_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CRICKET_MATCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cricketData: action.payload
      }

    case GET_CRICKET_MATCH_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case GET_ALL_CRICKET_MATCH_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_ALL_CRICKET_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allMatches: action.payload
      }

    case GET_ALL_CRICKET_MATCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case GET_FUND_BALANCE_DATA_START:
      return {
        ...state,
        isLoading: true
      }

    case GET_FUND_BALANCE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fundBalance: action.payload.fundBalance
      }

    case GET_FUND_BALANCE_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
       case GET_FUND_HISTORY_START:
      return {
        ...state,
        isLoading: true
      }

    case GET_FUND_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fundHistory: action.payload
      }

    case GET_FUND_HISTORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case UPDATE_FUND_BALANCE_START:
      return {
        ...state,
        isLoading: true
      }

    case UPDATE_FUND_BALANCE_SUCCESS:
      const temp = [...state.fundHistory , ...action.payload]
      return {
        ...state,
        isLoading: false,
        fundHistory: action.payload
      }

    case UPDATE_FUND_BALANCE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case FETCH_MATCH_DETAILS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_MATCH_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        matchDetails: action.payload
      }

    case FETCH_MATCH_DETAILS_FAILDED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}