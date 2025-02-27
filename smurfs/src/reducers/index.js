import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, SMURFS_ADD } from '../actions';

const initialState = {
    smurfs: [] ,
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
                smurfs: action.payload.data,
                isFetching: false,
                error: ""
            }

        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            }
            case SMURFS_ADD:
                return {
                  ...state,
                  smurfs: action.payload
                }


        default:
            return state
    }
}