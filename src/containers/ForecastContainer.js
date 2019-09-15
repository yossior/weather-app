import React, { Component } from 'react'
import ForecastComponent from '../components/ForecastComponent';
import { connect } from 'react-redux';

class ForecastContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { currentconditions: {
            "LocalObservationDateTime": "2019-09-15T23:11:00+03:00",
            "EpochTime": 1568578260,
            "WeatherText": "Mostly clear",
            "WeatherIcon": 34,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
              "Metric": {
                "Value": 25.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 78,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
          }, forecast: [] }
    }

    componentDidMount() {
        // this.getForecastAndCurrent();
    }

    getForecastAndCurrent() {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.props.city.Key}?apikey=${this.props.APIKey}&metric=true`)
            .then(response => response.json())
            .then(data => {
                console.log(this.props, 'aaaaaa');
                this.setState({ ...this.state, forecast: data.DailyForecasts })

            })
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${this.props.city.Key}?apikey=${this.props.APIKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data, 'bbbbbbb');
                this.setState({ ...this.state, currentconditions: data.DailyForecasts })
            })
    }

    render() {
        return (
            <div>
                <ForecastComponent forecast={this.state.forecast} currentConditions={this.state.currentconditions} city={this.props.city}  />
            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    return { city: state.locationReducer.currentCity, APIKey: state.locationReducer.APIKey }
}

export default connect(mapStateToProps)(ForecastContainer)