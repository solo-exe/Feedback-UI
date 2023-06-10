import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Card from './components/shared/Card'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
// import FeedBackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
import Post from './components/pages/Post'

function App() {

    // HOW TO BUILD COMPONENTS WITHOUT JSX
    // return React.createElement(
    //     'div',
    //     { className: 'container, message' },
    //     React.createElement(
    //         'h1',
    //         { className: 'container, message' },
    //         'My App'
    //     )
    // )

    return (
        <FeedbackProvider>
            {/* //props can be passed in component instances as html properties. Numbers, boolean, other components are passed in curly braces */}
            <Router>
                <div className="container">
                    <Header />
                    <Routes>

                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />

                        <Route exact path='/about' element={<AboutPage />} />

                        <Route path='/post/*' element={<Post />} />

                    </Routes>
                    <AboutIconLink />
                </div>
                {/* <Card>
                    <NavLink to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        About
                    </NavLink>
                </Card> */}
            </Router>
        </FeedbackProvider>
    )
}

export default App