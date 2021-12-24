import styled from "styled-components";

/* Start Work Section */

export const WorkSection = styled.article`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
`
export const WorkParts = styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.name === "first" ? "0" : "5%"};
    @media all and (max-width: 575px) {
        width: 100%;
        float: none;
        margin-left: 0;
    }
    @media all and (min-width: 576px) (max-width: 767px) {
        width: 47%;
    }
`
export const WorkHeader = styled.h3`
    font-size: 28px;
`
export const WorkIcon = styled.i`
    color: #888;
    margin-bottom: 20px;
`
export const WorkTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const WorkLine = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
`
export const WorkDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px;
`

/* Start Work Section */