import * as actionTypes from "./actionTypes";

export function sortDates(sortType) {
  return { type: actionTypes.SORT_DATES, sortType };
}

export function deletePatient(patient) {
  return { type: actionTypes.DELETE_PATIENT, payload: patient };
}




