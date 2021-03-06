import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

import Headroom from "react-headroom";



function Navigation() {
  return (
    <div className="navigation">
          {/*"#72EA80", "#15b40d", "#fcc81a", "0fd145", "#673AB7*/}
      {/*<Navbar className={"navbar"} style={{backgroundColor: "#f6f6f6"}} expand="lg">*/}
      <Navbar className={"navbar"} style={{backgroundColor: "#e9e9e9"}} expand="lg">
        <Navbar.Brand href="/" style={{padding: 0, margin: 0}}>
          <div style={{width: "12%", float: "left"}}>
            <img width="100%"src="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/logo.png?raw=true"/>
          </div>
            <div style={{width: "50%", float: "left", marginLeft: 10}}>
              <p style={{color: "#0fd145", margin: 0, lineHeight: 1, fontSize: 30}}>
                <strong>
                  VIPER
                </strong>
                <br/>Games
              </p>
            </div>

        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Games" menuAlign="right" id="basic-nav-dropdown">
              <NavDropdown.Item href="/escovid">ESCovid</NavDropdown.Item>
              <NavDropdown.Item href="/xmas">XMAS</NavDropdown.Item>
              <NavDropdown.Item href="/escovid/final">Other</NavDropdown.Item>
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
