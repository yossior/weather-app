import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestCities: [],
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: ''
        };
    }

    render() {

        return (
            <div>
                <React.Fragment>
                    <Input onChange={this.props.handleChange}
                        type="search"
                        // onKeyDown={this.onKeyDown}
                        value={this.userInput}
                        placeholder="Search"
                    />
                </React.Fragment>
                {
                    (this.state.suggestCities && this.state.userInput !== '' && this.state.showSuggestions) ?
                        <div>
                            <ListGroup>
                                {this.state.suggestCities.map((city, index) => {
                                    return (
                                        <ListGroupItem tag="button" action onClick={this.props.pickCity}>
                                            {`${city.LocalizedName}, ${city.Country.LocalizedName}`}
                                        </ListGroupItem>
                                    );
                                })}
                            </ListGroup>
                        </div> : <div />
                }
            </div>
        );
    };

}
export default Search;