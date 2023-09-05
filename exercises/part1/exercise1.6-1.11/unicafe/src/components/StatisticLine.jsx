function StatisticLine({ feedback, amount }) {
  return (
    <div className="statistic-line">
      <p>{feedback}</p>
      <p>{amount}</p>
    </div>
  )
}

export default StatisticLine
