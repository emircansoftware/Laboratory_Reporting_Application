import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActions from '../../redux/actions/storeActions';
import { Table, Button } from 'reactstrap';
import alertify from 'alertifyjs';


class StoreDetail extends Component {

    removeFromStore(patient){
        this.props.actions.removeFromStore(patient);
        alertify.error(patient.patientNameSurname + " adlı hasta listeden silindi.");
    }
  render() {
    return (
      <div>
        <h1>Hasta Listesi</h1>
        <Table>
          <thead>
            <tr>
              <th>Dosya No</th>
              <th>Kimlik No</th>
              <th>Hasta Ad/Soyad</th>
              <th>Rapor Tarihi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.store.map(storePatient => (
              <tr key={storePatient.patient.socialSecurityNumber}>
                <th scope="row">{storePatient.patient.folderNo}</th>
                <td>{storePatient.patient.socialSecurityNumber}</td>
                <td>{storePatient.patient.patientNameSurname}</td>
                <td>{storePatient.patient.reportDate}</td>
                <td>
                  <Button onClick={() => this.removeFromStore(storePatient.patient)} color='danger'>Sil</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromStore:bindActionCreators(storeActions.removeFromStore,dispatch)
        }
    }
}

function mapStateToProps(state){
    return{
        store: state.storeReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StoreDetail)
