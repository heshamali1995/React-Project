import React from 'react';
import {PortfolioSection, PortfolioTitle, PortfolioUl, PortfolioList, PortfolioBox, PortfolioDivs, PortfolioImg, Overlay, OverlaySpan} from "./Stlye.js";

function Portfolio() {
    return (
        <PortfolioSection>
            <PortfolioTitle>My Portfolio</PortfolioTitle>
            <PortfolioUl>
                <PortfolioList active>All</PortfolioList>
                <PortfolioList>HTML</PortfolioList>
                <PortfolioList>Photoshop</PortfolioList>
                <PortfolioList>Wordpress</PortfolioList>
                <PortfolioList>Mobile</PortfolioList>
            </PortfolioUl>
            <PortfolioBox>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img1.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img2.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img3.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img4.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img5.jpg" alt="" />
                    <p className="overlay">
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </p>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img6.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img7.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
                <PortfolioDivs>
                    <PortfolioImg src="./images/Portfolio/portfolio-img8.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </PortfolioDivs>
            </PortfolioBox>
        </PortfolioSection>
    )
}

export default Portfolio;