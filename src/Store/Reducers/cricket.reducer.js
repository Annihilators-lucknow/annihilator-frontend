import { GET_CRICKET_MATCH_DATA_START, GET_CRICKET_MATCH_DATA_SUCCESS, GET_CRICKET_MATCH_DATA_FAILED, GET_FUNDBALANCE_START, GET_FUNDBALANCE_SUCCESS, GET_FUNDBALANCE_FAILED } from '../../constant/actiontype';

const initialState = {
  cricketData: [],
  tokens: [],
  isLoading: false,
  error: [],
  fundbalance: []
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

    case GET_FUNDBALANCE_START:
      return {
        ...state,
        isloading: true,
      }

    case GET_FUNDBALANCE_SUCCESS:
      console.log("action==", action.payload)
      return {
        ...state,
        isloading: false,
        fundbalance: action.payload
      }

    case GET_FUNDBALANCE_FAILED:
      return {
        ...state,
        isloading: false,
        error: action.payload
      }

    default:
      return state
  }
}