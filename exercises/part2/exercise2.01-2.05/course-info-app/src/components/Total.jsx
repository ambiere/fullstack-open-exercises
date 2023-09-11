function Total({ parts }) {
  const sumOfexercises = parts.reduce((prev, { exercises }) => prev + exercises, 0)
  return (
    <div>
      <p>Total of {sumOfexercises} exercises</p>
    </div>
  )
}

export default Total
