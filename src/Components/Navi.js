import React, { Component } from "react";
import { NavItem, Nav ,NavLink} from "reactstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
          <NavLink href="#">Another Link</NavLink>{" "}
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    );
  }
}
