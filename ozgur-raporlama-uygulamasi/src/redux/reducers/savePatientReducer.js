import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function savePatientReducer(state=initialState.savedPatient,action){
    switch(action.type){
        case actionTypes.UPDATE_PATIENT_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_PATIENT_SUCCESS:
            return action.payload;
        default:
            return state
    }
}