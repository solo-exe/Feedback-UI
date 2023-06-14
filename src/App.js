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
import About from './pages/About'

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

    //props can be passed in component instances as html properties. Numbers, boolean, other components are passed in curly braces 

    // NavLinks Can hold a certain active class for specific pages
    //  <Card>
    //      <NavLink to='/' activeClassName='active'>
    //          Home
    //      </NavLink>
    //       <NavLink to='/about' activeClassName='active'>
    //           About             
    //       </NavLink>
    //   </Card> 

    return (
        <FeedbackProvider>
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

                        {/* Component={About}   a prop yuo can add to the Route element to specify the page the route goes to, this is an old method.*/}
                        <Route exact path='/about' element={<AboutPage />} />

                        {/* Pass Params as shown below */}
                        {/* <Route exact path='/post/:id/:leg_id' element={<Post />} /> */}

                        {/* Pass Parent to nested route as shown below Using the asterisk Sign '*' */}
                        <Route exact path='/post/*' element={<Post />} />

                    </Routes>

                    {/* NavLinks Can hold active classes for specific pages */}
                    {/* <Card>
                        <div className='space'>
                            <NavLink to='/' activeClassName='active'>
                                Home
                            </NavLink>
                            <NavLink to='/about' activeClassName='active'>
                                About
                            </NavLink>
                        </div>
                    </Card > */}

                    <AboutIconLink />
                </div>
            </Router>
            <About />
        </FeedbackProvider>
    )
}



export default App