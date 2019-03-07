import React, { Component } from 'react';
import ImageComp from "./ImageComp";


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ImageComp sendKeyword={this.props.sendKeyword}/>
            </div>
        );
    }
}


export default Header;