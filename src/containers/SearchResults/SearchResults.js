import React, {Component} from 'react';
import {Link} from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import CardForSearch from '../../components/Search/CardForSearch';

class SearchResults extends Component {



    render() {
        let searchResult= this.props.location.state.search;
        console.log("Search resaults from searchResults")
        console.log(searchResult);
        let results = <p>something went wrong</p>
        if(searchResult) {
            console.log("There are results")
            results = searchResult.map(result => {
                    return (
                        {/*<Link to={'/events/' + result.id} key={result.id}>*/},
                        {/*<CardForSearch*/},
                            {/*name={result.name}*/},
                        {/*/>*/},
                        {/*</Link>*/},

                        <EventCard
                            event={{...result}}
                            key={result.id}
                        />
                    );
                }
            );
        }

            console.log("results after return: " + results.length);

        return (
            <div className="SearchResults">
                <h1>Results</h1>
                {results}
            </div>
        )

    }
}

export default SearchResults;