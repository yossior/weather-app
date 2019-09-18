import React, { Component } from 'react'
import FavoritesComponent from '../components/FavoritesComponent'

class FavoritesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { favorites: [] }
    }

    componentDidMount() {
        if (localStorage.getItem('favorites') === null || localStorage.getItem('favorites') === '') {
            localStorage.setItem('favorites', '[]')
        }
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        this.setState({ ...this.state, favorites });
    }

    removeCity = (index) => {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.setState({ ...this.state, favorites })

    }

    render() {
        return (
            <FavoritesComponent favorites={this.state.favorites} removeCity={this.removeCity.bind(this)} />
        )
    }
}

export default FavoritesContainer
