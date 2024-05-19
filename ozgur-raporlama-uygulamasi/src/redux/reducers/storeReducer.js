import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function storeReducer(state = initialState.store, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_STORE:
            var addedPatient = state.find(c => c.patient.socialSecurityNumber === action.payload.patient.socialSecurityNumber);
            if (addedPatient) {
                return state; // Patient is already in the store, return the current state
            } else {
                return [...state, { ...action.payload }]; // Add the new patient to the store
            }
        case actionTypes.REMOVE_FROM_STORE:
            const newState2= state.filter(storePatient=>storePatient.patient.socialSecurityNumber!==action.payload.socialSecurityNumber)
            return newState2;
        default:
            return state;
    }
}

