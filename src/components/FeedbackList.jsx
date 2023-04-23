import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return (<p>No Feedback Yet</p>)
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        // set map item key
                        key={item.id}
                        // set no opacity at inital render
                        initial={{ opacity: 0 }}
                        // set to be pacity at final render
                        animate={{ opacity: 1 }}
                        // set opacity at exit
                        exit={{ opacity: 0 }}>
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // Component Without anumate presence

    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // )
}

export default FeedbackList 