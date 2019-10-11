import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""

}



export const rootReducer = (state = initialState, action) => {

    switch(action.type){

        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload.smurfs,
                isFetching: false,
                error: ""
            }

        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        default:
            return state
    }
}