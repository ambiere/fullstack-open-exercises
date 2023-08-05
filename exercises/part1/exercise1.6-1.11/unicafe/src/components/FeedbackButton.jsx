function FeedbackButton({feedback, updatateFeedback}) {
  return (
    <button type="button" onClick={()=>updatateFeedback(feedback)}>{feedback}</button>
  )
}

export default FeedbackButton