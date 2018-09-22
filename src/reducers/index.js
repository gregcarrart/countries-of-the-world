import { REQUEST_DATA, RECEIVE_DATA } from '../actions';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                loading: true
            };
        case RECEIVE_DATA:
            return {
                ...state,
                json: action.json,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
