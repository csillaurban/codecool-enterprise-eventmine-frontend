import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";
import './Highlights.css';
import efott from './efott.png'
import volt from './volt.jpg'
import sziget from './sziget.jpg'
import strand from './strand.png'

const Highlights = () => {
    return (
        <MDBContainer>
            <h4 className="mt-5 mb-2">Upcoming festivals</h4>
            <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img className="d-block" src={efott} alt="First slide" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"> </h3>
                            <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img className="d-block" src={volt} alt="Second slide" />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"> </h3>
                            <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img className="d-block" src={sziget} alt="Third slide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <p></p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img className="d-block" src={strand} alt="Mattonit's item" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"> </h3>
                            <p> </p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Highlights;