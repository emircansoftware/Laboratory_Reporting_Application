import React, { Component } from 'react'
import { Row, Col } from "reactstrap"
import LabList from '../labs/LabList'
import PatientList from '../patients/PatientList'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <LabList></LabList>
          </Col>

          <Col xs="9">
            <PatientList></PatientList>
          </Col>

        </Row>
      </div>
    )
  }
}
