import { useState } from "react"
import Header from "./components/Header"
import Statistics from "./components/Statistics"
import FeedbackInput from "./components/Feedback"

export type FeedbackState<T> = { [index: string]: T, good: T, neutral:T, bad: T}

function App() {
  const [feedback, setFeedback] = useState<FeedbackState<number>>({good: 0, neutral: 0, bad: 0})
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
