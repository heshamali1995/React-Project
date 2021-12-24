import React from 'react';
import {WorkSection, WorkHeader, WorkParts, WorkIcon, WorkTitle, WorkLine, WorkDesc} from "./Style.js";

function Work() {
    return (
        <WorkSection>
            <div className="container">
                <WorkHeader>My Work</WorkHeader>
                <WorkParts name="first">
                    <WorkIcon className="fa fa-chain fa-2x"></WorkIcon>
                    <WorkTitle>Mobile Ux</WorkTitle>
                    <WorkLine />
                    <WorkDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </WorkDesc>
                </WorkParts>
                <WorkParts>
                    <WorkIcon className="fa fa-bolt fa-2x"></WorkIcon>
                    <WorkTitle>Mobile Ux</WorkTitle>
                    <WorkLine />
                    <WorkDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </WorkDesc>
                </WorkParts>
                <WorkParts>
                    <WorkIcon className="fa fa-tachometer fa-2x"></WorkIcon>
                    <WorkTitle>Mobile Ux</WorkTitle>
                    <WorkLine />
                    <WorkDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
                    </WorkDesc>
                </WorkParts>
            </div>
        </WorkSection>
    )
}

export default Work;