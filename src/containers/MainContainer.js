import React, { Component } from 'react'
import MainComponent from '../components/MainComponent'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForecastContainer from './ForecastContainer';
import FavoritsContainer from './FavoritsContainer';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <MainComponent />
                {/* <Router>
                    <div>
                        <Route exact path="" Component={ForecastContainer} />
                        <Route path="/forecast" Component={ForecastContainer} />
                        <Route path="/favorits" Component={FavoritsContainer} />
                    </div>
                </Router> */}
            </div>
        )
    }
}

export default MainContainer
