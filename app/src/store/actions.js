import axios from 'axios'

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

// const url = `https://api.themoviedb.org/3/search/movie?api_key=b2277416d5d9ed434226025830448925&query=${query}&append_to_response=credits,video`

export const fetchCriminal = () => (dispatch) => {
    dispatch({type: FETCHING_START });
    axios.get('https://api.fbi.gov/wanted/v1/list')
    .then (res => {
        console.log("API Criminals data:", res.data)
        dispatch({ type: FETCHING_SUCCESS, payload: res.data.response})
    })

    .catch(err => {
        console.log(err);
        dispatch({type: FETCHING_FAILURE, payload: err})
      });

}    