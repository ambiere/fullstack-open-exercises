import StatisticLine from './StatisticLine'
import { FeedbackType } from './Statistics'

function Feedback({feedback: {good, neutral, bad}}: FeedbackType) {
  return (
    <div className='feedback'>
        <StatisticLine feedback={'Good'} amount={good}/> 
        <StatisticLine feedback={'Neutral'} amount={neutral}/> 
        <StatisticLine feedback={'Bad'} amount={bad}/> 
    </div>
  )
}

export default Feedback