import React from 'react'
import {connect} from 'react-redux'
import {fetchCriminal} from '../actions/actions'

const Criminals = (prop) => {
    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps = {fetchCriminal}

export default connect(mapStateToProps, mapDispatchToProps)(Criminals)
