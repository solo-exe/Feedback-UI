import { useState } from 'react'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedBackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'

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
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App