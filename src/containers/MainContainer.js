import React, { Component } from 'react'
import MainComponent from '../components/MainComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForecastContainer from './ForecastContainer';
import FavoritsContainer from './FavoritsContainer';

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
                            <Route path="/favorits" component={FavoritsContainer} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default MainContainer;