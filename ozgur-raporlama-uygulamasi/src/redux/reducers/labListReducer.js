import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeLabReducer(state=initialState.labs,action){
    switch(action.type){
        case actionTypes.GET_LABS_SUCCESS:
            return action.payload;
        default:
            return state
    }
}