import React, {Component} from 'react';

class SearchResult extends Component {
    render() {
        console.log(this.props.events);
        return (
            <div>
                <h1>Result</h1>
            </div>
        );
    }
}

export default SearchResult;