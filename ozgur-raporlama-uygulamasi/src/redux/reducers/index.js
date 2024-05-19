import { combineReducers } from "redux";
import changeLabReducer from "./changeLabReducer";
import labListReducer from "./labListReducer"
import patientListReducer from "./patientListReducer"
import storeReducer from "./storeReducer";
import savePatientReducer from "./savePatientReducer";


const rootReducer=combineReducers({
    changeLabReducer,
    labListReducer,
    patientListReducer,
    storeReducer,
    savePatientReducer
})

export default rootReducer;