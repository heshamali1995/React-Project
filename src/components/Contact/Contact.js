import React from 'react';
import {TextSection, TextTitle, TextForm, FormInputDiv, FormInput, InputInsideDiv, SubjectInput, Textarea, Submit} from "./Style";

function Text() {
    return (
        <TextSection>
            <div className="container">
                <TextTitle>Send Me A Text</TextTitle>
                    <TextForm action="">
                        <FormInputDiv>
                            <InputInsideDiv type="text" placeholder="Your Name" />
                            <InputInsideDiv type="email" placeholder="Your Email" />
                        </FormInputDiv>
                        <SubjectInput type="text" placeholder="Your Subject" />
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <Submit type="submit" value="Send Message" />
                    </TextForm>
            </div>
        </TextSection>
    )
}

export default Text;