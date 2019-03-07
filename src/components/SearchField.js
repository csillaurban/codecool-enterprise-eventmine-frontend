import React, {Component} from 'react';
import {InputGroup, FormControl, Button, Col} from 'react-bootstrap';



class SearchField extends Component{

    render() {
        return (
            <div className="SearchField">

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search events"
                    aria-label="Search events"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        );
    }


}

export default SearchField;