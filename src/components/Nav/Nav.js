import React from 'react';
import {NavSection, NavLogo, LogoText, NavUnorderedList, NavList, NavListAnchor, SettingDiv} from "./Style.js";

function SettingBox() {
    
}
function Nav() {
    return (
        <React.Fragment>
            <NavSection>
                <div className="container">
                    <NavLogo>
                        <LogoText>Ultra Profile</LogoText>
                    </NavLogo>
                    <NavUnorderedList>
                        <SettingDiv>
                            <i className="fa fa-bars"></i>
                        </SettingDiv>
                        <NavList><NavListAnchor to="/">Home</NavListAnchor></NavList>
                        <NavList><NavListAnchor to="#">Work</NavListAnchor></NavList>
                        <NavList><NavListAnchor to="#">Portfolio</NavListAnchor></NavList>
                        <NavList><NavListAnchor to="#">Resume</NavListAnchor></NavList>
                        <NavList><NavListAnchor to="#">About</NavListAnchor></NavList>
                        <NavList><NavListAnchor to="/contact">Contact</NavListAnchor></NavList>
                    </NavUnorderedList>
                </div>
            </NavSection>
        </React.Fragment>
    )
}

export default Nav;