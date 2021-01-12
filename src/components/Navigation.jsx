import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Stopwatch from "./stopwatch";


function Navigation() {
  return (
    <div className="navigation">
      <Navbar className={"navbar navbar-dark bg-primary"} expand="lg">
        <Navbar.Brand href="/">Escape Games</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Games" menuAlign="right" id="basic-nav-dropdown">
              <NavDropdown.Item href="/escovid">ESCovid19</NavDropdown.Item>
              <NavDropdown.Item href="/escovid">ESCovid20</NavDropdown.Item>
              <NavDropdown.Item href="/final">Other</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Suggestions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation);
