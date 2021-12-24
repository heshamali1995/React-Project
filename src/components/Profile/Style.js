import styled from "styled-components";

/* Start Profile Section */

export const ProfileSection = styled.article`
    padding: 50px 0;
    overflow: hidden;
`
export const MyProfile = styled.div`
    width: 50%;
    float: left;
    @media all and (max-width: 767px) {
        width: 100%;
        float: none;
        margin-bottom: 20px;
    }
`
export const ProfileHeader = styled.h3`
    font-size: 28px;
    margin-bottom: 20px;
`
export const ProfileUl = styled.ul`
    list-style: none;
`
export const ProfileList = styled.li`
    margin-bottom: 8px;
`
export const ProfileSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    font-weight: ${props => props.active ? "normal" : "bold"};
    color: ${props => props.active ? "#eb5424" : ""};
`
export const Skills = styled.div`
    width: 50%;
    float: left;
    @media all and (max-width: 767px) {
        width: 100%;
        float: none
    }
`
export const SkillsHeader = styled.h3`
    font-size: 28px;
    margin-bottom: 20px;
`
export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`
export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`
export const BarTitle = styled.span`
    float: left;
`
export const BarPercent = styled.span`
    float: right;
    margin-right: 100px;
`
export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`
export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.className === "sp1" ? "100%" : ""};
    width: ${props => props.className === "sp2" ? "90%" : ""};
    width: ${props => props.className === "sp3" ? "80%" : ""};
`

/* End Profile Section */