import styled from "styled-components";

/* Start Social Media Component */

export const SocialSection = styled.article`
    height: auto;
    overflow: hidden;
`
export const SocialDivs = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background-color: ${props => props.className === "face" ? "#3b5998" : ""};
    background-color: ${props => props.className === "twitter" ? "#498cbf" : ""};
    background-color: ${props => props.className === "pin" ? "#cc2127" : ""};
    @media all and (max-width: 991px) {
        width: 100%;
        float: none;
    }
`
export const SocialIcon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    cursor: pointer;
`
export const SocialText = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`
export const TextSpan = styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight: ${props => props.className === "info2" ? "normal" : ""};
`

/* Start Social Media Component */