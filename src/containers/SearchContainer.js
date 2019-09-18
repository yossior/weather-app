import React, { Component } from 'react'
import SearchComponent from '../components/SearchComponent';
import { connect } from 'react-redux';
import { pickCity } from '../actions';
import { catchError } from "../assets/errorCatching";

export class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { APIKey: '', suggestedCities: [], showSuggestions: false, userInput: '' };
    }

    render() {
        return (
            <div>
                <SearchComponent
                    handleChange={this.handleChange.bind(this)}
                    pickCity={this.pickCity.bind(this)}
                    suggestedCities={this.state.suggestedCities}
                    showSuggestions={this.state.showSuggestions}
                    userInput={this.state.userInput}
                />
            </div>
        )
    }

    pickCity = (city) => {
        this.setState({ ...this.state, showSuggestions: false, suggestedCities: [] })
        this.props._pickCity(city, this.props.APIKey);
    };

    handleChange = (e) => {
        if (e.currentTarget.value !== '') {
            this.setState({ ...this.state })
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.props.APIKey}&q=${e.currentTarget.value}`)
                .then(response => {
                    return response.json()
                })
                .then(cities => {
                    this.setState({ ...this.state, suggestedCities: cities, showSuggestions: true })
                })
                .catch(e => catchError(e));
        } else {
            this.setState({ ...this.state, suggestedCities: '', showSuggestions: false })
        }
    }
}

const mapStateToProps = state => {
    return { APIKey: state.locationReducer.APIKey }
}

const mapDispatchToProps = dispatch => {
    return { _pickCity: (city, APIKey) => dispatch(pickCity(city, APIKey)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);