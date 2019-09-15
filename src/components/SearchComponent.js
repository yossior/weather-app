import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';

export class SearchComponent extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Input
                        onChange={this.props.handleChange}
                        type="search"
                        placeholder="Search"
                    />
                </React.Fragment>
                {
                    (this.props.suggestedCities !== [] && this.props.showSuggestions) ?
                        <div>
                            <ListGroup>
                                {this.props.suggestedCities.map((city, index) => {
                                    return (
                                        <ListGroupItem tag="button" action onClick={this.props.pickCity.bind(null,city)}>
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
export default SearchComponent;