import { FETCH_CURRENT_USER } from '../actions';

export default function name(state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            {
                console.log(action.payload.data || false);
                return action.payload.data || false;
            }
        default:
            return state;
    }
}