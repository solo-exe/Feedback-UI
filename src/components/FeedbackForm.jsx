import React from 'react'
// import PropTypes from 'prop-types'
import { useState, useContext, useEffect } from 'react'

import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(5)

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    // this takes a callback and an array of dependencies that trigger the callback when changed. If this array of dependencies is empty, the callback runs when the component loads

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage('')
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at lease 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage('')
            setBtnDisabled(false)
        }
        setText(e.target.value)
        // work on pasting text
        // e.clipboardData ? setText(e.clipboardData.getData('text')) : setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = { text, rating }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('');
        }
    }

    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} //onPaste={handleTextChange} 
                        type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisbaled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div className='message'>{message}</div>}
        </Card>
    )
}

export default FeedbackForm
