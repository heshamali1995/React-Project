import React from 'react';
import {SocialSection, SocialDivs, SocialIcon, SocialText, TextSpan} from "./Style.js";

function SocialMedia() {
    return (
        <SocialSection>
            <SocialDivs className="face">
                <SocialIcon className="fa fa-facebook fa-lg"></SocialIcon>
                <SocialText>
                    <TextSpan className="info1">Follow Me on</TextSpan>
                    <TextSpan className="info2">Social Facebook</TextSpan>
                </SocialText>
            </SocialDivs>
            <SocialDivs className="twitter">
                <SocialIcon className="fa fa-twitter fa-lg"></SocialIcon>
                <SocialText>
                    <TextSpan className="info1">Tweet Me on</TextSpan>
                    <TextSpan className="info2">Social twitter</TextSpan>
                </SocialText>
            </SocialDivs>
            <SocialDivs className="pin">
                <SocialIcon className="fa fa-pinterest fa-lg"></SocialIcon>
                <SocialText>
                    <TextSpan className="info1">Pin Me on</TextSpan>
                    <TextSpan className="info2">Social Pinterest</TextSpan>
                </SocialText>
            </SocialDivs>
        </SocialSection>
    )
}

export default SocialMedia;