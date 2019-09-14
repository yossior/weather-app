import React, { Component } from 'react'
import ForecastComponent from '../components/ForecastComponent';
import { connect } from 'react-redux';

class ForecastContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { currentconditions: [], forecast: [] }
    }


    componentDidMount() {
        this.getForecastAndCurrent();
    }

    getForecastAndCurrent() {


        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.props.city.locationKey}?apikey=${this.props.APIKey}&metric=true`)
            .then(response => response.json())
            .then(data => {
                console.log(this.props, 'aaaaaa');
                this.setState({ ...this.state, forecast: data.DailyForecasts })

            })
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${this.props.city.locationKey}?apikey=${this.props.APIKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data, 'bbbbbbb');
                this.setState({ ...this.state, currentconditions: data.DailyForecasts })
            })
    }

    render() {
        return (
            <ForecastComponent />
        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    return { city: state.locationReducer.currentCity, APIKey: state.locationReducer.APIKey }
}

export default connect(mapStateToProps)(ForecastContainer)