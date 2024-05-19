import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function patientListReducer(state = initialState.patients, action) {
    switch (action.type) {
        case actionTypes.GET_PATIENTS_SUCCESS:
            return action.payload;
        case actionTypes.SORT_DATES:
            if (action.sortType === 'oldToNew') {
                return state.slice().sort((a, b) => new Date(a.reportDate) - new Date(b.reportDate));
            } else if (action.sortType === 'newToOld') {
                return state.slice().sort((a, b) => new Date(b.reportDate) - new Date(a.reportDate));
            }
            return state;
        case actionTypes.DELETE_PATIENT_SUCCESS:
            return state.filter(patient => patient.id !== action.payload.id);
        default:
            return state;
    }
}








