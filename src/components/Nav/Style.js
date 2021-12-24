import { Link } from "react-router-dom";
import styled from "styled-components";

/* Start Nav Section */

export const NavSection = styled.nav`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`
export const NavLogo = styled.div`
    width: 50%;
    float: left;
`
export const LogoText = styled.h1`
    font-size: 30px;
    font-weight: bold;
`
export const NavUnorderedList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    position: relative;
`
export const SettingDiv = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 28px;
    display: none;
    cursor: pointer;
    @media all and (max-width: 767px) {
        display: block !important;
    }
`
export const NavList = styled.li`
    display: inline-block;
    @media all and (max-width: 767px) {
        display: none;
    }
`
export const NavListAnchor = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        color: red;
    }
`

/* End Nav Section */