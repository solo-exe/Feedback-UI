import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import Card from '../shared/Card'

function AboutPage(props) {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>

                <div className="about-link">
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        </Card>

    )
}

AboutPage.propTypes = {}

export default AboutPage
