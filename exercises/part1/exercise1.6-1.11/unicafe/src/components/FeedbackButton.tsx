type FeedbackButton = {feedback: string, updatateFeedback: (feedback:string) => void}

function FeedbackButton({feedback, updatateFeedback}:FeedbackButton) {
  return (
    <button type="button" onClick={()=>updatateFeedback(feedback)}>{feedback}</button>
  )
}

export default FeedbackButton