import styled from "styled-components";

/* Start Main Header Section */

export const HeaderSection = styled.header`
    height: 578px;
    background-image: url("./images/home-bg.jpg");
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`
export const HeaderInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const Title = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media all and (max-width: 575px) {
        font-size: 30px;
    }
    @media all and (max-width: 768px) {
        font-size: 40px;
    }
`
export const Information = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
`
export const Desc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    @media all and (max-width: 768px) {
        font-size: 15px;
    }
`
export const DescSpan = styled.span`
    color: #000;
`
export const Button = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background: #fff;
        color: #eb5424;
    }
`

/* End Main Header Section */