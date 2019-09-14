export const getSuggestions = (value) => {
    return async dispatch => {
        const request = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=OLKAewnJK1b3SjIGRtjRnUTNqAcldZei&q=${value}`);
        const data = await request.json();
        return dispatch({ type: "SUGS-UPDATE", payload: { suggestionss: data } });
    };
}

export const resetSuggestions = () => {
    debugger
    return { type: "SUGS-UPDATE", payload: { suggesions: [] } };
}

export const pickCity = (locationKey) => {
    debugger
    return { type: "PICK-CITY", payload: { city: locationKey } };
}