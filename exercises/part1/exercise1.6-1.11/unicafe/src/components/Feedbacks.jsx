import StatisticLine from './StatisticLine'

function Feedback({feedback: {good, neutral, bad}}) {
  return (
    <div className='feedback'>
        <StatisticLine feedback={'Good'} amount={good}/> 
        <StatisticLine feedback={'Neutral'} amount={neutral}/> 
        <StatisticLine feedback={'Bad'} amount={bad}/> 
    </div>
  )
}

export default Feedback