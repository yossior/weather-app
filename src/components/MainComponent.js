import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import ForecastCardComponent from './ForecastCardComponent';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { forecast: [{ "Date": "2019-09-13T07:00:00+03:00", "EpochDate": 1568347200, "Temperature": { "Minimum": { "Value": 24.8, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us" }, { "Date": "2019-09-14T07:00:00+03:00", "EpochDate": 1568433600, "Temperature": { "Minimum": { "Value": 23.5, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 29.6, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us" }, { "Date": "2019-09-15T07:00:00+03:00", "EpochDate": 1568520000, "Temperature": { "Minimum": { "Value": 24.0, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 29.4, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 14, "IconPhrase": "Partly sunny w/ showers", "HasPrecipitation": true, "PrecipitationType": "Rain", "PrecipitationIntensity": "Light" }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us" }, { "Date": "2019-09-16T07:00:00+03:00", "EpochDate": 1568606400, "Temperature": { "Minimum": { "Value": 23.4, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.2, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us" }, { "Date": "2019-09-17T07:00:00+03:00", "EpochDate": 1568692800, "Temperature": { "Minimum": { "Value": 22.1, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us" }] }
    }

    // componentDidMount() {
    //     fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/325876?apikey=OLKAewnJK1b3SjIGRtjRnUTNqAcldZei&metric=true')
    //         .then(response => response.json())
    //         .then(data => {

    //             this.setState({ ...this.state, forecast: data.DailyForecasts })
    //             debugger
    //         })
    // }
    render() {
        return (
            <div>

                <div style={{ width: "100px", margin: "auto", marginTop: "10px", marginBottom: "10px" }}>
                    <SearchComponent style={{ marginTop: "30px", margin: "auto", width: "80%" }} />
                </div>

                <div >
                    <Row >


                        {this.state.forecast.map(forecast => <Col sm="2"><ForecastCardComponent forecast={forecast} /></Col>)}

                    </Row>
                </div>




                {/* <Navbar color="light" light expand="md">
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <Link to="/forecast" className="col-sm-2 menu-item">Forecast</Link>
                            </NavItem>
                            <NavItem width="50%">
                                <Link to="/favorits" className="col-sm-2 menu-item">Favorits</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar> */}
            </div>
        )
    }
}

export default MainComponent
