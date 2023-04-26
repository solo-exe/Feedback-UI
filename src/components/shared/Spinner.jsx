import React from 'react'
import spinner from '../assets/VAyR.gif'

function Spinner(props) {
    return (
        <img src={spinner} alt="Loading..." style={{
            width: '100px', margin: 'auto', display: 'block'
        }} />
    )
}

Spinner.propTypes = {}

export default Spinner
