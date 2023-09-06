import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";

function NavBar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/newsletter" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
            NewsLetter
          </NavLink>
          <NavLink to="/price" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
            Price
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
