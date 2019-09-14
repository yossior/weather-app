import React, { Component } from 'react'
import SearchComponent from '../components/SearchComponent';
import { connect } from 'react-redux';

export class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { APIKey: '' };
    }

    render() {
        return (
            <div>
                <SearchComponent
                    handleChange={this.handleChange.bind(this)}
                    pickCity={this.pickCity.bind(this)}
                />
            </div>
        )
    }

    pickCity = (key) => {
        this.setState({
            ...this.state,
            showSuggestions: false
        });
    };

    handleChange = (e) => {
        console.log('ffffffffffffffff');
        
        if (e.currentTarget.value !== '') {
            this.setState({ ...this.state})
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.props.APIKey}&q=${e.currentTarget.value}`)
                .then(response => {
                    return response.json()
                })
                .then(cities => {
                    this.setState({ ...this.state, suggestCities: cities, showSuggestions: true })
                });
        } else {
            this.setState({ ...this.state, suggestCities: '' })
        }
    }



}

const mapStateToProps = state => {
    console.log(state);
    return { APIKey: state.locationReducer.APIKey }
}

export default connect(mapStateToProps)(SearchComponent);
