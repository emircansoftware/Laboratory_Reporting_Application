import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getLabs } from "../../redux/actions/labActions";
import { savePatient } from "../../redux/actions/patientActions";
import PatientDetail from "./PatientDetail";

function AddOrUpdatePatient({
    patients,
    labs,
    getLabs,
    savePatient,
    ...props
}) {
    const params = useParams();
    const { folderNo } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState({ ...props.patient });
    const [errors,setErrors]=useState({})

    useEffect(() => {
        if (labs.length === 0) {
            getLabs();
        }
        if (folderNo && patients.length > 0) {
            const foundPatient = getPatientByFolderNo(patients, folderNo);
            setPatient(foundPatient);
        } else {
            setPatient({ ...props.patient });
        }
    }, [props.patient, getLabs, labs.length, folderNo, patients]);

    function handleChange(event) {
        const { name, value } = event.target;
        setPatient(previousPatient => ({
            ...previousPatient,
            [name]: name === "labId" ? parseInt(value, 10) : value
        }));

        validate(name,value)

        
        
    }

    function validate(name,value){
        if(name==="patientNameSurname" && value===""){
            {
                setErrors(previousErrors=>({
                    ...previousErrors,patientNameSurname:"Hasta adı ve soyadı olmalıdır."
                }))
            }
        }else{
            setErrors(previousErrors=>({
                ...previousErrors,patientNameSurname:""
            }))
        }
    }

    function handleSave(event) {
        event.preventDefault();
        savePatient(patient).then(() => {
            navigate("/");
        });
    }

    return (
        <PatientDetail patient={patient} labs={labs} onChange={handleChange} onSave={handleSave} errors={errors} />
    );
}

export function getPatientByFolderNo(patients, folderNo) {
    let patient = patients.find(patient => patient.folderNo == folderNo) || null;
    return patient;
}

function mapStateToProps(state) {
    return {
        patients: state.patientListReducer,
        labs: state.labListReducer
    };
}

const mapDispatchToProps = {
    getLabs, savePatient
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdatePatient);








