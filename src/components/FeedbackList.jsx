import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

// import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return (<p>No Feedback Yet</p>)
    }

    // return (
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //                 <motion.div
    //                     // set map item key
    //                     key={item.id}
    //                     // set no opacity at inital render
    //                     initial={{ opacity: 0 }}
    //                     // set to be pacity at final render
    //                     animate={{ opacity: 1 }}
    //                     // set opacity at exit
    //                     exit={{ opacity: 0 }}>
    //                     <FeedbackItem
    //                         key={item.id}
    //                         item={item}
    //                         handleDelete={handleDelete}
    //                     />
    //                 </motion.div>
    //             ))}
    //         </AnimatePresence>
    //     </div>
    // )

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }))
}

export default FeedbackList 