// import axios from 'axios'

// export const FETCHING_START = "FETCHING_START";
// export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
// export const FETCHING_FAILURE = "FETCHING_FAILURE"

export const fetchCriminal = () => (dispatch) => {
    dispatch({type: FETCHING_START });
    axios.get('https://api.fbi.gov/wanted/v1/list')
    .then(res => {
        console.log("API Criminals data:", res.data)
        // dispatch({ type: FETCHING_SUCCESS, payload: res})
    })

    .catch(err => {
        console.log(err);
        // dispatch({type: FETCHING_FAILURE, payload: err})
      });
    }
    
