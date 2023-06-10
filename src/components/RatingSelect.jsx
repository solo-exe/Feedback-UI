import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const maxRating = 10
    const [selected, setSelected] = useState(maxRating)

    const { feedbackEdit } = useContext(FeedbackContext)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(() => {
        setSelected(feedbackEdit.item.rating || maxRating)
    }, [feedbackEdit])

    const radioValues = []
    for (let i = 0; i < maxRating; i++) {
        radioValues.push(<li key={i}>
            <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1} //{`${}`}
                onChange={handleChange}
                checked={selected === +`${i + 1}`}
            />
            <label htmlFor={`num${i + 1}`}>{`${i + 1}`}</label>
        </li>)
    }

    return (<div>
        <ul className="rating">
            {radioValues}
        </ul>
    </div>)
}

RatingSelect.propTypes = {
    select: PropTypes.func.isRequired
}

export default RatingSelect
