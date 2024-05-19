import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,NavLink,
  Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActions from '../../redux/actions/storeActions';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

class StoreSummary extends Component {
    removeFromStore(patient){
        this.props.actions.removeFromStore(patient);
        alertify.error(patient.patientNameSurname + " adlı hasta listeden silindi.");
    }

    renderEmpty(){
        return (
            <NavItem>
                <NavLink>Hasta Listesi Boş</NavLink>
            </NavItem>
        )
    }

    renderSummary(){
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hasta Listesi
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.store.map(storePatient=>(
                            <DropdownItem key={storePatient.patient.socialSecurityNumber}>
                                <Badge color='danger' onClick={()=>this.removeFromStore(storePatient.patient)}>X</Badge>
                                {storePatient.patient.patientNameSurname}</DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/list"}>Hasta Listesine Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {this.props.store.length>0? this.renderSummary() : this.renderEmpty()}
            </div>
        );
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

export default connect(mapStateToProps,mapDispatchToProps)(StoreSummary)

