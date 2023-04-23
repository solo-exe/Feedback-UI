import { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(5)

    const { feedbackEdit } = useContext(FeedbackContext)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    return (
        <div>
            <ul className='rating'>
                <li>
                    <input
                        type='radio'
                        id={`num1`}
                        name='rating'
                        value='1'
                        onChange={handleChange}
                        checked={selected === 1}
                    />
                    <label htmlFor={`num1`}>1</label>
                </li>
                <li>
                    <input
                        type='radio'
                        id={`num2`}
                        name='rating'
                        value='2'
                        onChange={handleChange}
                        checked={selected === 2}
                    />
                    <label htmlFor={`num2`}>2</label>
                </li>
                <li>
                    <input
                        type='radio'
                        id={`num3`}
                        name='rating'
                        value='3'
                        onChange={handleChange}
                        checked={selected === 3}
                    />
                    <label htmlFor={`num3`}>3</label>
                </li>
                <li>
                    <input
                        type='radio'
                        id={`num4`}
                        name='rating'
                        value='4'
                        onChange={handleChange}
                        checked={selected === 4}
                    />
                    <label htmlFor={`num4`}>4</label>
                </li>
                <li>
                    <input
                        type='radio'
                        id={`num5`}
                        name='rating'
                        value='5'
                        onChange={handleChange}
                        checked={selected === 5}
                    />
                    <label htmlFor={`num5`}>5</label>
                </li>
            </ul>
        </div>
    )
    // return (<div>
    //     <ul className="rating">
    //         for (i = 0; i < 10; i++) {
    //             <li>
    //                 <input
    //                     type='radio'
    //                     id={`num${i + 1}`}
    //                     name='rating'
    //                     value={`${i + 1}`}
    //                     onChange={handleChange}
    //                     checked={selected === +`${i + 1}`}
    //                 />
    //                 <label htmlFor={`num${i + 1}`}>{`${i + 1}`}</label>
    //             </li>
    //         }
    //     </ul>
    // </div>)
}

RatingSelect.propTypes = {
    select: PropTypes.func.isRequired
}

export default RatingSelect
