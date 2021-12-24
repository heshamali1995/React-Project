import React from "react";
import {HeaderSection, HeaderInformation, Title, Information, Desc, DescSpan, Button} from "./Style.js";

function Header() {
    return (
        <HeaderSection>
            <div className="container">
                <HeaderInformation>
                    <Title>John Doe</Title>
                    <Information>Creative Director</Information>
                    <Desc>
                        Iam a professional <DescSpan>UX Designer</DescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let's work together. Thank you. 
                    </Desc>
                    <Button>Let's Begin</Button>
                </HeaderInformation>
            </div>
        </HeaderSection>
    )
}

export default Header;