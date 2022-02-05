import axios from "axios";
import {
  GET_CRICKET_MATCH_DATA_START, GET_CRICKET_MATCH_DATA_SUCCESS, GET_CRICKET_MATCH_DATA_FAILED,
  UPDATE_CRICKET_RECORD_START, UPDATE_CRICKET_RECORD_SUCCESS, UPDATE_CRICKET_RECORD_FAILED, GET_FUND_BALANCE_DATA_START, GET_FUND_BALANCE_DATA_SUCCESS, GET_FUND_BALANCE_DATA_FAILED
} from "../../constant/actiontype";
import apiconfig from "../../constant/apiconfig";
import { authHeader } from '../../constant/header'



export const getAllCricketMatch = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CRICKET_MATCH_DATA_START });
    try {
      const res = await axios.get(`${apiconfig.baseURL}/latest-match`, {
        headers: authHeader(),
      })
      dispatch({ type: GET_CRICKET_MATCH_DATA_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: GET_CRICKET_MATCH_DATA_FAILED, payload: err })
    }
  }
}

export const updateCricketMatchData = (data) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CRICKET_RECORD_START });
    try {
      const res = await axios.post(`${apiconfig.baseURL}/submit`, data, {
        headers: authHeader(),
      })
      dispatch({ type: UPDATE_CRICKET_RECORD_SUCCESS, payload: res.data.matchData });
    } catch (err) {
      dispatch({ type: UPDATE_CRICKET_RECORD_FAILED, payload: err })
    }
  }
}

export const getFundBalance = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_FUND_BALANCE_DATA_START });
    try {
      const res = await axios.get(`${apiconfig.baseURL}/get-fundbalance`, {
        header: authHeader(),
      })
      dispatch({ type: GET_FUND_BALANCE_DATA_SUCCESS, payload: res.data.data });
    }
    catch (err) {
      dispatch({ type: GET_FUND_BALANCE_DATA_FAILED, payload: err })
    }
  }
}
