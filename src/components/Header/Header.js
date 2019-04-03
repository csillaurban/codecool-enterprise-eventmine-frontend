import React, {Component} from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ImageSlider/>
                <Search/>
            </div>
        );
    }
}

export default Header;