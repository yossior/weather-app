import {
    combineReducers
} from 'redux';



const APIKey = '8byUAqSlgqTL9uCYDUdIiRJKF3LSNfjj'


const telAviv = {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
    }
}

const telAvivForecast = [
    {
        "Date": "2019-09-17T07:00:00+03:00",
        "EpochDate": 1568692800,
        "Temperature": {
            "Minimum": {
                "Value": 22.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 31.3,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    {
        "Date": "2019-09-18T07:00:00+03:00",
        "EpochDate": 1568779200,
        "Temperature": {
            "Minimum": {
                "Value": 23.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 31.6,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    },
    {
        "Date": "2019-09-19T07:00:00+03:00",
        "EpochDate": 1568865600,
        "Temperature": {
            "Minimum": {
                "Value": 24.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 31.5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    },
    {
        "Date": "2019-09-20T07:00:00+03:00",
        "EpochDate": 1568952000,
        "Temperature": {
            "Minimum": {
                "Value": 23.3,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 30.5,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    },
    {
        "Date": "2019-09-21T07:00:00+03:00",
        "EpochDate": 1569038400,
        "Temperature": {
            "Minimum": {
                "Value": 22.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": 29.3,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    }
]

const telAvivConditions = [
    {
        "LocalObservationDateTime": "2019-09-17T13:10:00+03:00",
        "EpochTime": 1568715000,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 30.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 87,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
]

const checkIfFavorite = (city) => {
    debugger
    if (localStorage.getItem('favorites') === null || localStorage.getItem('favorites') === '') {
        localStorage.setItem('favorites', '[]')
    }

    if (localStorage.getItem('favorites') !== '' && localStorage.getItem('favorites') !== null) {

        const favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites.some(fav => fav.Key === city.Key)) {

            return true;
        }
        return false;
    }
    return false;
}

const initialState = {
    isFavorite: checkIfFavorite(telAviv),
    currentCity: telAviv,
    currentConditions: telAvivConditions, forecast: telAvivForecast,
    APIKey
}

// old:  OLKAewnJK1b3SjIGRtjRnUTNqAcldZei

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PICK-CITY':
            return {
                ...state,
                currentCity: action.payload.city,
                currentConditions: action.payload.currentConditions,
                forecast: action.payload.forecast,
                isFavorite: checkIfFavorite(action.payload.city)
            }
        case "CHANGE-FAV":
            debugger
            return {
                ...state,
                isFavorite: action.payload.isFavorite
            }
        default:
            return state;
    }
}

export default combineReducers({
    locationReducer
});