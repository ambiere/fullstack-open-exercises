import AvarageScore from './AvarageScore'
import Feedback from './Feedbacks'
import Header from './Header'
import PositiveFeedback from './PositiveFeedback'
import TotalFeedback from './TotalFeedback'

function Statistics({feedback}) {
  const title= "Statistics"
  return (
    <div>
        <Header title={title}/>
        {
            feedback.bad || feedback.good || feedback.neutral ? 
            <>
            <Feedback feedback={feedback}/>
            <TotalFeedback feedback={feedback}/>
            <AvarageScore feedback={feedback}/>
            <PositiveFeedback feedback={feedback}/>
            </> : 
            <p>No feedback given</p>
        }
    </div>
  )
}

export default Statistics