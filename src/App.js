import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
    return (
        <>
            {/* //props can be passed in component instances as html properties. Numbers, and boolean are passed in curly braces */}
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </>


    )
}

export default App