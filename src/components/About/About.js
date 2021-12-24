import React from 'react';
import {AboutSection, AboutInfo, AboutTitle, InfoDir, InfoDesc, DescAnchor} from "./Style.js";

function About() {
    return (
        <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle>This is Me</AboutTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <DescAnchor href="#">explicabo</DescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;