import FeedbackButton from './FeedbackButton'

function FeedbackInput({ setFeedback }) {
  function updateFeedback(feedback) {
    console.log(feedback)
    return setFeedback((prev) => {
      console.log(`Updated "${feedback}":`, prev[feedback.toLowerCase()] + 1)
      return {
        ...prev,
        [feedback.toLowerCase()]: prev[feedback.toLowerCase()] + 1,
      }
    })
  }
  return (
    <div className="button">
      <FeedbackButton feedback={'Good'} updatateFeedback={updateFeedback} />
      <FeedbackButton feedback={'Neutral'} updatateFeedback={updateFeedback} />
      <FeedbackButton feedback={'Bad'} updatateFeedback={updateFeedback} />
    </div>
  )
}

export default FeedbackInput
