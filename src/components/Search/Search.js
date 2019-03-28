import React, {Component} from 'react';
import {TextInput} from 'react-materialize';
import './Search.css';
import axios from "axios";
import {Link} from "react-router-dom";
import EventCard from "../../containers/Events/Events";

class Search extends Component{
    state = {
        keyword: '',
        results: [],
        isKeyword: false
    };

    onChange = (e) => this.setState({keyword: e.target.value});

    submitKeyword = (keyword) => {
        this.props.sendKeyword(keyword);
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.submitKeyword} className="form-inline mt-4 mb-4">
            <TextInput icon="search"
                        name="keyword"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.keyword}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}

export default Search;



{/*submitKeyword = (e) => {
    e.preventDefault();
    this.props.sendKeyword(this.state.keyword);
    this.setState({keyword: ''});
};*/}
