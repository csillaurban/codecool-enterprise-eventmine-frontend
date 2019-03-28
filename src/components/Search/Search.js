import React, {Component} from 'react';
import {TextInput} from 'react-materialize';
import './Search.css';

class Search extends Component{
    state = {
        keyword: '',
    };

    handleChange = (e) => this.setState({keyword: e.target.value});

    submitKeyword = (e) => {
        e.preventDefault();
        this.props.sendKeyword(this.state.keyword);
        this.setState({keyword: ''});
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
            </div>
        );
    }
}

export default Search;

