function AvarageScore({ feedback: { good, neutral, bad } }) {
  const totalFeedback = good + neutral + bad
  const scores = (good - bad) / totalFeedback

  return (
    <div className="avarage-score">
      <p>Avarage</p>
      <p>{scores ? scores : 0}</p>
    </div>
  )
}

export default AvarageScore
