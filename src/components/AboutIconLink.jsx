import React from 'react'
// import PropTypes from 'prop-types'

import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink(props) {
    return (
        <div className='about-link'>
            <Link to={{
                pathname: '/about',
                search: '?sort=name' // Add query params
            }}>
                <FaQuestion size={30} />
            </Link>

            {/* <div className="about">
                <p><a href="/about">About This Project</a></p>
            </div> */}
        </div>
    )
}

AboutIconLink.propTypes = {}

export default AboutIconLink
