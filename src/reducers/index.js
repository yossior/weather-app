import {
    combineReducers
} from 'redux';

const initialState = {
    currentCity: { city: 'Tel Aviv', locationKey: 215854 },
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