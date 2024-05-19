import * as actionTypes from "./actionTypes";

export function getPatientsSuccess(patients) {
    return { type: actionTypes.GET_PATIENTS_SUCCESS, payload: patients };
}

export function createPatientSuccess(patient) {
    return { type: actionTypes.CREATE_PATIENT_SUCCESS, payload: patient };
}

export function updatePatientSuccess(patient) {
    return { type: actionTypes.UPDATE_PATIENT_SUCCESS, payload: patient };
}

export function deletePatientSuccess(patient) {
    return { type: actionTypes.DELETE_PATIENT_SUCCESS, payload: patient };
}

export async function savePatientApi(patient) {
    const url = "http://localhost:3000/patients/" + (patient.id || "");
    const method = patient.id ? "PUT" : "POST";
    console.log(`Making ${method} request to ${url} with data:`, patient);

    return fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patient)
    })
    .then(handleResponse)
    .catch(handleError);
}

export function savePatient(patient) {
    return function (dispatch) {
        return savePatientApi(patient).then(savedPatient => {
            patient.socialSecurityNumber ? dispatch(updatePatientSuccess(savedPatient)) : dispatch(createPatientSuccess(savedPatient));
        }).catch(error => { throw error });
    };
}

export function getPatients(labId) {
    return function (dispatch) {
        let url = "http://localhost:3000/patients";
        if (labId) {
            url = url + "?labId=" + labId;
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getPatientsSuccess(result)))
            .catch(handleError);
    };
}

export async function deletePatientApi(patientId) {
    const url = "http://localhost:3000/patients/" + patientId;
    return fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePatient(patient) {
    return function (dispatch) {
        return deletePatientApi(patient.id).then(() => {
            dispatch(deletePatientSuccess(patient));
        }).catch(error => { throw error });
    };
}

export async function handleResponse(response) {
    if (response.ok) {
        return response.json();
    }

    const error = await response.text();
    throw new Error(error);
}

export function handleError(error) {
    console.error("Bir hata oluştu.", error);
    throw error;
}




