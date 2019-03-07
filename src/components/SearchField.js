import React, {Component} from 'react';
import {MDBCol} from 'mdbreact';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";


class SearchField extends Component{
    state = {
        keyword: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    submitKeyword = (e) => {
        e.preventDefault();
        this.props.sendKeyword(this.state.keyword);
        this.setState({keyword: ''});
    }

    render() {
        return (
            <MDBCol md="6">
                <form onSubmit={this.submitKeyword} className="form-inline mt-4 mb-4">
                    <input
                        name="keyword"
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.keyword}
                        onChange={this.onChange}
                    />
                </form>
                <Router>
                </Router>
            </MDBCol>
        );
    }
}

export default SearchField;