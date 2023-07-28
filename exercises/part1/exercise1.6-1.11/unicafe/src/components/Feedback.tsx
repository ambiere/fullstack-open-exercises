import React from 'react'
import FeedbackButton from './FeedbackButton'
import { FeedbackState } from '../App'

type Feedback = {setFeedback: React.Dispatch<React.SetStateAction<FeedbackState<number>>>}

function FeedbackInput({setFeedback}: Feedback) {
  function updateFeedback(feedback:string) {
    console.log(feedback)
    return setFeedback((prev) => { 
      console.log(`Updated "${feedback}":`, prev[feedback.toLowerCase()] + 1)
      return {...prev, [feedback.toLowerCase()]: prev[feedback.toLowerCase()] + 1}
    })
  }
  return (
    <div className='button'>
        <FeedbackButton feedback={"Good"} updatateFeedback={updateFeedback}/>
        <FeedbackButton feedback={"Neutral"} updatateFeedback={updateFeedback}/>
        <FeedbackButton feedback={"Bad"} updatateFeedback={updateFeedback}/>
    </div>
  )
}

export default FeedbackInput