import { createContext, useState, useEffect } from 'react'
// import FeedbackData from '../data/FeedbackData'

// import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedaback
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false)
    }

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => (item.id !== id)))
        }
    }

    // Add feedback
    const addFeedback = async (newFeedback) => {
        const data = await (await fetch('/feedback', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(newFeedback)
        })).json()
        setFeedback([data, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    // Update feedback item
    const updateFeedback = async (id, updItem) => {

        const data = await (await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })).json()

        // A way to update an upject you've not seen before, that is adding key-data items to already existing keys removes the old key
        setFeedback(feedback.map((item) => ((item.id === id) ? { ...item, ...data } : item)))
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            isLoading,
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