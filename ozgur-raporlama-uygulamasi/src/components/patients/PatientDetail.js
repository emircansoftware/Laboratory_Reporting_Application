// PatientDetail.js

import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const PatientDetail = ({ labs, patient, onSave, onChange, errors }) => {
    return (
        <form onSubmit={onSave}>
            <h2>{patient.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput
                name="folderNo"
                label="Dosya Numarası"
                value={patient.folderNo}
                onChange={onChange}
                error={errors.folderNo}
            />
            <SelectInput
                name="labId"
                label="Lab"
                value={patient.labId || ""}
                defaultOption="Seçiniz"
                options={[
                    { value: "1111111", text: "Lab 1" },
                    { value: "2222222", text: "Lab 2" },
                    { value: "3333333", text: "Lab 3" },
                    { value: "4444444", text: "Lab 4" },
                    { value: "5555555", text: "Lab 5" },
                    { value: "6666666", text: "Lab 6" },
                    { value: "7777777", text: "Lab 7" },
                    { value: "8888888", text: "Lab 8" },
                    { value: "9999999", text: "Lab 9" },
                    { value: "1010101", text: "Lab 10" },

                ]}
                onChange={onChange}
                error={errors.labId}
            />

            <TextInput
                name="patientNameSurname"
                label="Hasta Ad/Soyad"
                value={patient.patientNameSurname}
                onChange={onChange}
                error={errors.patientNameSurname}
            />
            <TextInput
                name="socialSecurityNumber"
                label="Kimlik Numarası"
                value={patient.socialSecurityNumber}
                onChange={onChange}
                error={errors.socialSecurityNumber}
            />
            <TextInput
                name="diagnosticTitle"
                label="Koyulan Tanı"
                value={patient.diagnosticTitle}
                onChange={onChange}
                error={errors.diagnosticTitle}
            />
            <TextInput
                name="diagnosticDetail"
                label="Tanı Detayı"
                value={patient.diagnosticDetail}
                onChange={onChange}
                error={errors.diagnosticDetail}
            />
            <TextInput
                name="reportDate"
                label="Rapor Tarihi"
                value={patient.reportDate}
                onChange={onChange}
                error={errors.reportDate}
            />
            <TextInput 
                name="reportPNG"
                label="Rapor Fotoğrafı"
                value={patient.reportPNG}
                onChange={onChange}
                error={errors.reportPNG}
            />

            <button  type="submit" className="btn btn-success"> 
                Kaydet
            </button>
            

            
                
        </form>
    );
};

export default PatientDetail;
