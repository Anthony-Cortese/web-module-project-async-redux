import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "../store/actions"

const initialState = {
    criminals: {},
    error: '',
    loading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
      return {...state, loading: true}
    case FETCHING_SUCCESS:
      return {...state, loading: false, criminals: action.payload}
    case FETCHING_FAILURE:
      return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}