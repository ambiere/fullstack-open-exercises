function TotalFeedback({feedback: {good, neutral, bad}}) {
  const totalFeedback = good + neutral + bad
  return (
    <div className='total-feedback'>
        <p>Total feedback</p>
        <p>{totalFeedback}</p>
    </div>
  )
}

export default TotalFeedback