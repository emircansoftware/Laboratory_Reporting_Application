import React from 'react';

const PatientDetailPage = ({ patient }) => {
  return (
    <div>
      <h2>Hasta Detayı</h2>
      <p><strong>Dosya Numarası:</strong> {patient.folderNo}</p>
      <p><strong>Kimlik Numarası:</strong> {patient.socialSecurityNumber}</p>
      <p><strong>Hasta Adı/Soyadı:</strong> {patient.patientNameSurname}</p>
      <p><strong>Koyulan Tanı:</strong> {patient.diagnosticTitle}</p>
      <p><strong>Tanı Detayı:</strong> {patient.diagnosticDetail}</p>
      <p><strong>Rapor Tarihi:</strong> {patient.reportDate}</p>
      <p><strong>Rapor Fotoğrafı:</strong> {patient.reportPNG}</p>
      {/* İhtiyacınıza göre diğer hastaya ait bilgileri ekleyebilirsiniz */}
    </div>
  );
};

export default PatientDetailPage;
