import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import StoreDetail from "../store/StoreDetail";
import AddOrUpdatePatient from "../patients/AddOrUpdatePatient";
import NotFound from "../common/NotFound";



function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patient" element={<Dashboard />} />
        <Route path="/savepatient/:folderNo" element={<AddOrUpdatePatient />} />
        <Route path="/savepatient" element={<AddOrUpdatePatient />} />
        <Route path="/list" element={<StoreDetail />} />
        <Route element={NotFound} />
        
      </Routes>
    </Container>
  );
}

export default App;

