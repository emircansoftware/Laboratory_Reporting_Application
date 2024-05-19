import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import StoreSummary from '../store/StoreSummary'; 
import { Link } from 'react-router-dom';
import {Input} from "reactstrap"

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color='warning' light expand="md">
          <NavbarBrand href='/'>EG Laboratuvar Raporlama</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
            <NavItem>
                <NavLink>
                <Link to="https://github.com/emircansoftware">Hazırlayan</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to="/savepatient">Rapor Ekle</Link>
                </NavLink>
              </NavItem>
              
              <NavItem>
                <StoreSummary />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}




