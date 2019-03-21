import React, { Component } from 'react';
import ImageComp from "./ImageComp";


class Header extends Component {


    render() {
        return (
            <div className="Header" style={headerStyle}>
                <ImageComp sendKeyword={this.props.sendKeyword}/>
            </div>
        );
    }
}

const headerStyle = {
    margin: '30px'
};

export default Header;