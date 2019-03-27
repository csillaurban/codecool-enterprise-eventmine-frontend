import React from 'react';
import {Slider, Slide, MediaBox} from 'react-materialize';
import './ImageSlider.css';
import M from 'jquery';

const imageSlider = () => {
    return (
        <div >
        <Slider >
            <Slide className="slider" image={<MediaBox src="https://nyc3.digitaloceanspaces.com/servercarlosesverde/elevenews/wp-content/uploads/2018/12/12222219/Party.jpg"/>}>
                <div className="caption center-align">
                    <h3>
                        The biggest parties
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        The coolest places
                    </h5>
                </div>
            </Slide>
            <Slide className="slider" image={<MediaBox src="https://www.thebostoncalendar.com/system/events/photos/000/026/871/original/Party_Dream_Color_party.jpg?1443946618"/>}>
                <div className="caption left-align">
                    <h3>
                        The best prices
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        Speciel offers on every Friday
                    </h5>
                </div>
            </Slide>
            <Slide className="slider" image={<MediaBox src="https://sportslinkinternational.com/wp-content/uploads/2017/11/party-in-barcelona.jpg"/>}>
                <div className="caption right-align">
                    <h3>
                        Festivals, concerts, theater, museums
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                        You can find everything here
                    </h5>
                </div>
            </Slide>
        </Slider>
        </div>
    )
};

export default imageSlider;