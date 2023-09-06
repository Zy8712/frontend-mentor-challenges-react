import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavBarElements";
 
function NavBar(){
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/qr-code-component" activeStyle>
                        QRCode
                    </NavLink>
                    <NavLink to="/advice-generator-app" activeStyle>
                        AdviceGen
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default NavBar;