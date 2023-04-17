import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedBackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

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
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App