import { useState } from "react"
import Header from "./components/Header"
import Statistics from "./components/Statistics"
import FeedbackInput from "./components/Feedback"

function App() {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})
  const title = "Give feedback"

  return (
    <div className="main">
      <Header title={title}/>
      <FeedbackInput setFeedback={setFeedback}/>
      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App
