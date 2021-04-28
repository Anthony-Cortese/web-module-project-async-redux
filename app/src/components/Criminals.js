import React from 'react'
import { connect } from 'react-redux'
import { fetchCriminal } from '../store/actions'

function Criminals(props) {
    if (props.loading) {
        return (
            <> 
            <p>Get another criminal</p>
            </>
        )
    }

    return (
        <>
        <button onClick={() => props.fetchCriminal()}>Get another Criminal</button>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        criminals: state.name,
    }
}

export default connect(mapStateToProps, {fetchCriminal})(Criminals)
