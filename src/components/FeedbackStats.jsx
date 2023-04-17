import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    //Calculate ratings avg
    let average = (feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length).toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.defaultProps = {
    feedback: []
}
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats