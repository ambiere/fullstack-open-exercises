function PositiveFeedback({feedback: {good, neutral, bad}}) {
    const totalFeedback = good + neutral + bad 
    const positiveFeedback = good / totalFeedback
    return (
    <div className="positive-feedback">
        <p>Positive</p>
        <p>{positiveFeedback ? positiveFeedback : 0}%</p>
    </div>
  )
}

export default PositiveFeedback