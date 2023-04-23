import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => (item.id !== id)))
        }
    }

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {

        // A way to update an upject you've not seen before, that is adding key-data items to already existing keys removes the old key
        setFeedback(feedback.map((item) => ((item.id === id) ? { ...item, ...updItem } : item)))
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext