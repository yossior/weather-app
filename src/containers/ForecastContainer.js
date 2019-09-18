import React, { Component } from 'react'
import ForecastComponent from '../components/ForecastComponent';
import { connect } from 'react-redux';
import { pickCity, changeFav } from '../actions/index'

class ForecastContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentConditions: {},
            forecast: [],
            isFavorite: props.isFavorite
        }
    }

    componentDidMount() {
        this.getForecastAndCurrent();
    }

    changeFav() {
        debugger
        this.props._changeFav(this.props.city, !this.props.isFavorite)
    }

    checkIfFavorite() {
        if (localStorage.getItem('favorites') === null || localStorage.getItem('favorites') === '') {
            localStorage.setItem('favorites', '[]')
        }

        if (localStorage.getItem('favorites') !== '' && localStorage.getItem('favorites') !== null) {
            const favorites = JSON.parse(localStorage.getItem("favorites"));
            if (favorites.some(fav => fav.Key === this.props.city.Key)) {
                return true;
            }
            return false;
        }
        return false;
    }

    addOrRemoveFavorites = () => {
        if (localStorage.getItem('favorites') === null || localStorage.getItem('favorites') === '') {
            localStorage.setItem('favorites', '[]')
        }
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        const index = favorites.findIndex(fav => {
            debugger
            return fav.Key === this.props.city.Key
        });
        debugger
        if (index === -1) {
            favorites.push({ name: this.props.city.LocalizedName, Key: this.props.city.Key, Country: this.props.city.Country });
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            favorites.splice(index, 1);
            localStorage.setItem('favorites', favorites);
        }
        this.setState({ ...this.state, isFavorite: !this.state.isFavorite })
        this.changeFav();

    }





    getForecastAndCurrent() {
        this.props._pickCity(this.props.city, this.props.APIKey)
    }

    render() {
        return (
            <div>
                <ForecastComponent
                    forecast={this.props.forecast.DailyForecasts}
                    currentConditions={this.props.currentConditions[0]}
                    city={this.props.city}
                    addOrRemoveFavorites={this.addOrRemoveFavorites.bind(this)}
                    isFavorite={this.props.isFavorite}
                />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { city: state.locationReducer.currentCity, isFavorite: state.locationReducer.isFavorite, currentConditions: state.locationReducer.currentConditions, APIKey: state.locationReducer.APIKey, forecast: state.locationReducer.forecast }
}

const mapDispatchTOProps = dispatch => {
    return { _pickCity: (city, APIKey) => dispatch(pickCity(city, APIKey)), _changeFav: (city, isFavorite) => dispatch(changeFav(city, isFavorite)) }
}

export default connect(mapStateToProps, mapDispatchTOProps)(ForecastContainer)