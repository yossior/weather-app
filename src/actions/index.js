export const pickCity = (city, APIKey, isFavorite) => {
    return async dispatch => {
        const currentRequest = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${APIKey}`);

        const forecastRequest = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.Key}?apikey=${APIKey}&metric=true`);

        const currentConditions = await currentRequest.json();
        const forecast = await forecastRequest.json();

        return dispatch({ type: "PICK-CITY", payload: { city, currentConditions, forecast, isFavorite } });
    };
}

export const changeFav = (city, isFavorite) => {
    return ({ type: "CHANGE-FAV", payload: { city, isFavorite } });
}