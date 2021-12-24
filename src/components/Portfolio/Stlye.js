import styled from "styled-components";

/* Start Portfolio Section */

export const PortfolioSection = styled.article`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`
export const PortfolioTitle = styled.h3`
    text-align: center;
    font-size: 28px;
`
export const PortfolioUl = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
`
export const PortfolioList = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: ${props => props.active ? "#eb5424" : ""};
    color: ${props => props.active ? "#fff" : ""};
    &:hover {
        background-color: #eb5424;
    }
    @media all and (max-width: 575px) {
        display: block;
        margin: auto;
    }
`
export const PortfolioBox = styled.div`
    background: #eb5424;
    color: #fff;
`
export const PortfolioDivs = styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > p {
        opacity: 1;
    }
    @media all and (max-width: 575px) {
        width: 100%;
    }
    @media all and (min-width: 576px) (max-width: 767px) {
        width: 50%;
    }
`
export const PortfolioImg = styled.img`
    width: 100%;
`
export const Overlay = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
`
export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
    color: #000;
`

/* End Portfolio Section */