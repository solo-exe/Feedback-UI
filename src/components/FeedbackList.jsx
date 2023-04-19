import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return (<p>No Feedback Yet</p>)
    }

    return (
        <div className='feedback-list'>
            <ul>
                <AnimatePresence>
                    {feedback.map((item) => (
                        <motion.div
                            key={item.id}
                            // set no opacity at inital render
                            initial={{ opacity: 0 }}
                            // set to be opaque after animation
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <FeedbackItem
                                key={item.id}
                                item={item}
                                handleDelete={handleDelete}
                            />
                        </motion.div>

                    ))}
                </AnimatePresence>
            </ul>
        </div>
    )

    // return (
    //     <div className='feedback-list'>
    //         <ul>
    //             {feedback.map((item) => (
    //                 <FeedbackItem
    //                     key={item.id}
    //                     item={item}
    //                     handleDelete={handleDelete}
    //                 />
    //             ))}
    //         </ul>
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }))
}

export default FeedbackList 