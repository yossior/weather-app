import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import ForecastCardComponent from './ForecastCardComponent';

export class Search extends Component {
    static propTypes = {};

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
                    <Input
                    
                        type="search"
                        onChange={this.onChange}
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
                                        <ListGroupItem tag="button" action onClick={this.onClick.bind(this)}>
                                            {`${city.LocalizedName}, ${city.Country.LocalizedName}`}
                                        </ListGroupItem>
                                    );
                                })}
                            </ListGroup>
                            <div>
                                {/* {this.state.suggestCities.map((city, key) => 
                                    // <ForecastCardComponent city={city}/>
                                    key
                                )} */}
                                
                            </div>
                        </div>

                        : <div></div>
                }

            </div>

        );
    };

    onClick = (key) => {
        this.setState({
            ...this.state,
            showSuggestions: false
        });

    };


    onChange = (e) => {
        if (e.currentTarget.value !== '') {
            this.setState({ ...this.state, userInput: e.currentTarget.value })
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OLKAewnJK1b3SjIGRtjRnUTNqAcldZei&q=${e.currentTarget.value}`)
                .then(response => {
                    return response.json()
                })
                .then(cities => {
                    this.setState({ ...this.state, suggestCities: cities, showSuggestions: true })
                });
        } else {
            this.setState({ ...this.state, suggestCities: '' })
        }

        // const { suggestions } = this.props;
        // const userInput = e.currentTarget.value;

        // const filteredSuggestions = this.suggestions.filter(
        //     (suggestion) =>
        //         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );



        // this.setState({
        //     activeSuggestion: 0,
        //     filteredSuggestions,
        //     showSuggestions: true,
        //     userInput: e.currentTarget.value
        // });
    };



}
export default Search;