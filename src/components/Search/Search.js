import React, {Component} from 'react';
import {TextInput} from 'react-materialize';
import './Search.css';
import axios from "axios";
import {Redirect} from 'react-router';
import {API_URLS} from "../../authService/api_urls";

class Search extends Component{
    state = {
        keyword: '',
        results: [],
    };

    handleChange = (e) => this.setState({keyword: e.target.value});

    submitKeyword = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('accessToken');
        const headers = { 'Authorization': `Bearer ${token}`, 'Access-Control-Allow-Origin': 'http://localhost:8080'};
        const keyword = this.state.keyword;
        axios.get(API_URLS.events + keyword, { headers })
            .then(res => {
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

