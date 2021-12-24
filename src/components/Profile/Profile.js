import React from 'react';
import {ProfileSection, MyProfile, ProfileHeader, ProfileUl, ProfileList, ProfileSpan, Skills, SkillsHeader, SkillsDesc, SkillsBar, BarTitle, BarPercent, BarParent, ParentSpan} from "./Style.js";

function Profile() {
    return (
        <ProfileSection>
            <div className="container">
                <MyProfile>
                    <ProfileHeader>Profile</ProfileHeader>
                    <ProfileUl>
                        <ProfileList>
                            <ProfileSpan>Name</ProfileSpan>
                            John Doe
                        </ProfileList>
                        <ProfileList>
                            <ProfileSpan>Birthday</ProfileSpan>
                            21/1/1997
                        </ProfileList>
                        <ProfileList>
                            <ProfileSpan>Address</ProfileSpan>
                            Newyork City
                        </ProfileList>
                        <ProfileList>
                            <ProfileSpan>Phone</ProfileSpan>
                            4444 5555 6666
                        </ProfileList>
                        <ProfileList>
                            <ProfileSpan>Email</ProfileSpan>
                            name@name.com
                        </ProfileList>
                        <ProfileList>
                            <ProfileSpan>Website</ProfileSpan>
                            <ProfileSpan active>www.google.com</ProfileSpan>
                        </ProfileList>
                    </ProfileUl>
                </MyProfile>
                <Skills>
                    <SkillsHeader>Skills</SkillsHeader>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        <BarTitle>Bootstrap</BarTitle>
                        <BarPercent>100%</BarPercent>
                        <BarParent>
                            <ParentSpan className="sp1"></ParentSpan>
                        </BarParent>
                    </SkillsBar>
                    <SkillsBar>
                        <BarTitle>CSS3</BarTitle>
                        <BarPercent>90%</BarPercent>
                        <BarParent>
                            <ParentSpan className="sp2"></ParentSpan>
                        </BarParent>
                    </SkillsBar>
                    <SkillsBar>
                        <BarTitle>Photoshop</BarTitle>
                        <BarPercent>80%</BarPercent>
                        <BarParent>
                            <ParentSpan className="sp3"></ParentSpan>
                        </BarParent>
                    </SkillsBar>
                </Skills>
            </div>
        </ProfileSection>
    )
}

export default Profile;