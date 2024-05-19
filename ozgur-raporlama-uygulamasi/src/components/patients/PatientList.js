import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Table, Button, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as patientActions from '../../redux/actions/patientActions';
import * as storeActions from '../../redux/actions/storeActions';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';
import * as patientListActions from "../../redux/actions/patientListActions";

class PatientList extends Component {
  state = {
    searchTerm: ""
  };

  componentDidMount() {
    this.props.actions.getPatients();
  }

  handleDeletePatient = (patient) => {
    this.props.actions.deletePatient(patient)
      .then(() => {
        alertify.error(patient.patientNameSurname + " adlı hasta kalıcı olarak silindi.");
      })
      .catch(error => {
        alertify.error("Silme işlemi başarısız oldu.");
      });
  };

  handleSortOldToNew = () => {
    this.props.actions.sortDates('oldToNew');
  };

  handleSortNewToOld = () => {
    this.props.actions.sortDates('newToOld');
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  addToStore = (patient) => {
    const existingPatient = this.props.store.find(
      storePatient => storePatient.patient.socialSecurityNumber === patient.socialSecurityNumber
    );

    if (existingPatient) {
      alertify.error(patient.patientNameSurname + " adlı hasta zaten listede.");
    } else {
      this.props.actions.addToStore({ quantity: 1, patient });
      alertify.success(patient.patientNameSurname + " adlı hasta listeye eklendi.");
    }
  }

  render() {
    const { currentLab, patients } = this.props;
    const { searchTerm } = this.state;

    const filteredPatients = patients.filter(patient => {
      if (!patient || !patient.patientNameSurname || !patient.socialSecurityNumber || !currentLab) {
        return false;
      }

      return (
        patient.patientNameSurname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.socialSecurityNumber.toString().includes(searchTerm) ||
        (currentLab.labName + " " + currentLab.labSurname).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return (
      <div>
        <h3>
          <Badge color='secondary'>Hastalar</Badge>
          {currentLab && currentLab.labName && currentLab.labSurname && (
            <Badge color='success'>
              {currentLab.labName + " " + currentLab.labSurname}
            </Badge>
          )}
        </h3>
        <Input
          type="text"
          placeholder="Arama..."
          value={searchTerm}
          onChange={this.handleSearchChange}
          className="mb-3"
        />
        <Table>
          <thead>
            <tr>
              <th>Dosya No</th>
              <th>Kimlik No</th>
              <th>Hasta Ad/Soyad</th>
              <th>Rapor Tarihi</th>
              <th>
                <Button onClick={this.handleSortOldToNew} color='info' size='sm'>Eskiden Yeniye</Button>
                <Button onClick={this.handleSortNewToOld} color='info' size='sm'>Yeniden Eskiye</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.socialSecurityNumber}>
                <th scope="row"><Link to={"/savepatient/" + patient.folderNo}>{patient.folderNo}</Link></th>
                <td>{patient.socialSecurityNumber}</td>
                <td>{patient.patientNameSurname}</td>
                <td>{patient.reportDate}</td>
                <td>
                  <Button onClick={() => this.addToStore(patient)} color='success'>Seçiniz</Button>
                  <Button onClick={() => this.handleDeletePatient(patient)} color='danger'>Siliniz</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLab: state.changeLabReducer,
    patients: state.patientListReducer,
    store: state.storeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPatients: bindActionCreators(patientActions.getPatients, dispatch),
      addToStore: bindActionCreators(storeActions.addToStore, dispatch),
      sortDates: bindActionCreators(patientListActions.sortDates, dispatch),
      deletePatient: bindActionCreators(patientActions.deletePatient, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList)


















