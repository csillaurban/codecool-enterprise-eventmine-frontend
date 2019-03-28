import React, {Component} from 'react';
import {TextInput} from 'react-materialize';
import './Search.css';
import axios from "axios";
import {Redirect} from 'react-router';

class Search extends Component{
    state = {
        keyword: '',
        results: [],
    };

    handleChange = (e) => this.setState({keyword: e.target.value});

    submitKeyword = (e) => {
        e.preventDefault();
        const keyword = this.state.keyword;
        axios.get(`http://localhost:8080/events/search/${keyword}`)
            .then(res => {
                console.log("Response from search");
                console.log(res.data);
                    this.setState({results: res.data})
                }
            )
    };

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
                        onChange={this.handleChange}
                    />
                </form>
                {this.state.results.length > 0 ?
                    <Redirect to={{
                        pathname: '/search/results',
                        state: { search: this.state.results}
                    }} /> : null
                }
            </div>
        );
    }
}

export default Search;

