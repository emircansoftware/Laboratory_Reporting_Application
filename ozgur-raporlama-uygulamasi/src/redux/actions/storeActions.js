import * as actionTypes from "./actionTypes"

export function addToStore(addPatient){
    return{ type: actionTypes.ADD_TO_STORE,payload:addPatient}
}

export function removeFromStore(removePatient){
    return{ type: actionTypes.REMOVE_FROM_STORE,payload:removePatient}
}


