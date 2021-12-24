import styled from "styled-components";

/* Start About Me Section */

export const AboutSection = styled.article`
    height: 500px;
    background: url('./images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media all and (max-width: 991px) {
        height: auto;
    }
`
export const AboutInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media all and (max-width: 991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
    }
`
export const AboutTitle = styled.h3`
    font-size: 34px
`
export const InfoDir = styled.h4`
    font-size: 30px;
    color: #eb5424;
    margin-bottom: 20px;
    @media all and (max-width: 991px) {
        font-size: 22px;
    }
`
export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
`
export const DescAnchor = styled.a`
    text-decoration: none;
`

/* End About Me Section */