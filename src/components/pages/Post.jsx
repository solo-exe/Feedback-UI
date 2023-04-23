import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post(props) {
    // const params = useParams()  
    const status = 200
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/about')
    }

    if (status === 404) {
        return <Navigate to='/notfound' />
    }

    return (
        <div>
            Post
            <b></b>
            <button onClick={onClick}>
                clickMe
            </button>
            <Routes>
                <Route path='/show' element={<h1>HELLO WORLD</h1>} />
            </Routes>
        </div>
    )
}

export default Post
