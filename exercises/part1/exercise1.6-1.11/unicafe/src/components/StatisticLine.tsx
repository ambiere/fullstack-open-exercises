type StatisticLineType = {feedback: string, amount: number}

function StatisticLine({feedback, amount}: StatisticLineType) {
  return (
    <div className="statistic-line">
        <p>{feedback}</p>
        <p>{amount}</p>
    </div>
  )
}

export default StatisticLine