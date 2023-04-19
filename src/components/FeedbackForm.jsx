import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react'

import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
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
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = { text, rating }
            handleAdd(newFeedback)
            setText('');
        }
    }
    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisbaled={btnDisabled}>Send</Button>
                </div>
            </form>
            {message && <div className='message'>{message}</div>}
        </Card>
    )
}

export default FeedbackForm
