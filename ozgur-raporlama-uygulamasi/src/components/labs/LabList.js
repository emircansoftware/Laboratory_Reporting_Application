import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as labActions from '../../redux/actions/labActions';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import * as patientActions from '../../redux/actions/patientActions';

class LabList extends Component {

  componentDidMount() {
    this.props.actions.getLabs();
  }
  selectLab = lab => {
    this.props.actions.changeLab(lab);
    this.props.actions.getPatients(lab.id);
  }

  render() {


    return (
      <div>
        <h3><Badge color='secondary'>Laboratuvarlar </Badge></h3>
        <ListGroup>
          {this.props.labs.map(lab => (
            <ListGroupItem
              active={lab.id === this.props.currentLab.id}
              onClick={() => this.selectLab(lab)}
              key={lab.id}
            >
              {`${lab.labName || ''} ${lab.labSurname || ''}`}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLab: state.changeLabReducer,
    labs: state.labListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getLabs: bindActionCreators(labActions.getLabs, dispatch),
      changeLab: bindActionCreators(labActions.changeLab, dispatch),
      getPatients: bindActionCreators(patientActions.getPatients, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabList);



