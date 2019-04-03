import React, {Component} from 'react';
import {Link} from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import Header from "../../components/Header/Header";

class SearchResults extends Component {
    render() {
        let searchResult= this.props.location.state.search;
        let results = <p>something went wrong</p>
        if(searchResult) {
            results = searchResult.map(result => {
                    return (
                        <Link to={'/events/' + result.id} key={result.id}>
                            <EventCard
                            event={{...result}}
                            key={result.id}
                            />
                        </Link>
                    );
                }
            );
        }

        return (
            <div className="SearchResults">
                <Header />
                <h1>Results</h1>
                {results}

            </div>
        )
    }
}

export default SearchResults;