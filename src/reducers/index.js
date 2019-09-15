import {
    combineReducers
} from 'redux';

const initialState = {
    currentCity: {
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
    },
    APIKey: 'OLKAewnJK1b3SjIGRtjRnUTNqAcldZei',
}

const locationReducer = (state = initialState, action) => {
    console.log(state, action, 'Suggestions Reducer')
    switch (action) {
        case 'PICK-CITY':
            return {
                ...state,
                currentCity: action.payload.city
            }

        default:
            return state;
    }
}

export default combineReducers({
    locationReducer
});