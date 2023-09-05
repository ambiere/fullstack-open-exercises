function Total({ parts }) {
  const sumOfexercises = parts.reduce(
    (prev, { exercises }) => prev + exercises,
    0
  )
  return (
    <div>
      <p>Number of exercises {sumOfexercises}</p>
    </div>
  )
}

export default Total
