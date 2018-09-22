export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = () => ({
    type: REQUEST_DATA
});

export const receivedData = json => ({
    type: RECEIVE_DATA,
    json: json
});

//Main Fetch Function, determines if value is passed
export function fetchData(country) {
    return function(dispatch) {
        dispatch(requestData());
        if (country !== '') {
            return fetch(` https://restcountries.eu/rest/v2/name/${country}`)
                    .then(
                        response => response.json(),
                        error => console.log('An error occurred: ', error),
                    )
                    .then((json) => {
                        dispatch(receivedData(json));
                    })
        } else {
            return fetch(` https://restcountries.eu/rest/v2/all`)
                    .then(
                        response => response.json(),
                        error => console.log('An error occurred: ', error),
                    )
                    .then((json) => {
                        dispatch(receivedData(json));
                    })
        }
    }
}
