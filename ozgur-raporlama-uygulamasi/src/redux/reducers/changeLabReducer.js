import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeLabReducer(state=initialState.currentLab,action){
    switch(action.type){
        case actionTypes.CHANGE_LAB:
            return action.payload;
        default:
            return state
    }
}