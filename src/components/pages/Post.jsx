import React from 'react'
import { Navigate, useNavigate, Routes, Route, useParams } from 'react-router-dom'

function Post(props) {
    // const params = useParams()  
    const status = 200
    const navigate = useNavigate()

    const params = useParams()

    const onClick = () => {
        navigate('/about')
    }

    if (status === 404) {
        return <Navigate to='/notfound' />
    }

    return (
        <div>

            {/* Use Param Values as Shown Below */}
            {params.id ?? null}
            {params.leg_id ?? null}



            {/* Redirecting To a a page */}
            <button onClick={onClick}>
                clickMe
            </button>

            {/* This only shows if '/show' is placed after the url for this page */}
            <Routes>
                <Route path='/show' element={<h1>HELLO WORLD</h1>} />
            </Routes>
        </div>
    )
}

export default Post
