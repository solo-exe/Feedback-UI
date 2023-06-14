import React from 'react'
// import PropTypes from 'prop-types'

import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* 
                Using Anchor tags liks below causes a refresh on the browser, which becomes slow based onnetword rather than just rendering the tags

                <a href='/about'>
                    <FaQuestion size={30} />
                </a>
            */}
            <Link to={{
                pathname: '/about',
                search: '?sort=name', // Add optional query params 
                hash: '#hello' // Add optional hash
            }}>  {/* or set prop as ===>> to='/about' */}
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
