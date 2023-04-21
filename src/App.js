import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedBackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

import { v4 as uuidv4 } from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => (item.id !== id)))
        }
    }
    return (
        <>
            {/* //props can be passed in component instances as html properties. Numbers, and boolean are passed in curly braces */}
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                                <AboutIconLink />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />}>
                            This is the About Page
                        </Route>

                    </Routes>
                </div>

            </Router>

        </>
    )
}

export default App