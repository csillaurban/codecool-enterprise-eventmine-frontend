import React, {Component} from 'react';
import {Link} from "react-router-dom";
import EventCard from "../Events/Events";

class SearchResults extends Component {


    render() {
        let searchResult = this.props.search;
        //console.log(searchResult);
        let results = searchResult.map(result => {
                 return (
                         <EventCard
                             name={result.name}
                             location={result.location}
                             date={result.date}
                             numOfAvailableTickets={result.numOfAvailableTickets}
                             price={result.price}
                             key={result.id}
                         />
                );
             }
         );

        console.log("results after return: " + results.length);
        console.log("results after return");
        console.log(results);

        return (
            <div className="SearchResults">
                <h1>Results</h1>
                {results}
            </div>
        )

    }
}

export default SearchResults;