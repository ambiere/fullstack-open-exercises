import { FeedbackType } from './Statistics'

function TotalFeedback({feedback: {good, neutral, bad}}: FeedbackType) {
  const totalFeedback = good + neutral + bad
  return (
    <div className='total-feedback'>
        <p>Total feedback</p>
        <p>{totalFeedback}</p>
    </div>
  )
}

export default TotalFeedback