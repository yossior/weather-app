import React, { Component } from 'react'
import MainComponent from '../components/MainComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForecastContainer from './ForecastContainer';
import FavoritesContainer from './FavoritesContainer';

class MainContainer extends Component {

    render() {
        return (
            <div>
                <Router >
                    <div>
                        <MainComponent  />
                        <Switch>
                            <Route exact path="/" component={ForecastContainer} />
                            <Route path="/forecast" component={ForecastContainer} />
                            <Route path="/favorites" component={FavoritesContainer} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default MainContainer;