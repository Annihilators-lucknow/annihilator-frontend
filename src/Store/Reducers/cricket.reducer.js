import { GET_CRICKET_MATCH_DATA_START, GET_CRICKET_MATCH_DATA_SUCCESS, GET_CRICKET_MATCH_DATA_FAILED, GET_FUND_BALANCE_DATA_START, GET_FUND_BALANCE_DATA_SUCCESS, GET_FUND_BALANCE_DATA_FAILED } from '../../constant/actiontype';

const initialState = {
  cricketData: [],
  tokens: [],
  isLoading: false,
  error: [],
  fundBalance: []
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

    default:
      return state
  }
}