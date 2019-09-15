import React, { Component } from 'react'
import SearchComponent from '../components/SearchComponent';
import { connect } from 'react-redux';
import { pickCity } from '../actions'

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
        this.props._pickCity(city);
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
                });
        } else {
            this.setState({ ...this.state, suggestedCities: '', })
        }
    }
}

const mapStateToProps = state => {
    console.log(state, 'ddddddddddddddddddddddddddd');

    return { APIKey: state.locationReducer.APIKey }
}

const mapDispatchToProps = dispatch => {
    return { _pickCity: (city) => dispatch(pickCity(city)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);