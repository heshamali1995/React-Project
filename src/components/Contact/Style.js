import styled from "styled-components";

/* Start Text Section */

export const TextSection = styled.article`
    padding: 50px 0;
    text-align: center;
`
export const TextTitle = styled.h3`
    font-size: 28px;
    margin-bottom: 30px;
    @media all and (max-width: 575px) {
        font-size: 22px
    }
` 
export const TextForm = styled.form`
    width: 70%;
    margin: auto;
`
export const FormInput = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    @media all and (max-width: 575px) {
        width: 90%;
    }
`
export const FormInputDiv = styled.div`
    overflow: hidden;
`
export const InputInsideDiv = styled(FormInput)`
    width: 50%;
    float: ${props => props.type === "text" ? "left" : ""};
    float: ${props => props.type === "email" ? "right" : ""};
    @media all and (max-width: 575px) {
        width: 100%;
    }
`
export const SubjectInput = styled(FormInput)`
    width: 100%;
`
export const Textarea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
`
export const Submit = styled(FormInput)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`

/* End Text Section */