import * as actionTypes from "./actionTypes"

export function changeLab(lab){
    return {type:actionTypes.CHANGE_LAB, payload:lab}
}

export function getLabsSuccess(labs){
    return {type:actionTypes.GET_LABS_SUCCESS, payload:labs}
}

export function getLabs(){
    return function(dispatch){
        let url="http://localhost:3000/labs"
        return fetch(url).then(response=>response.json()).then(result=>dispatch(getLabsSuccess(result)))
    }
}