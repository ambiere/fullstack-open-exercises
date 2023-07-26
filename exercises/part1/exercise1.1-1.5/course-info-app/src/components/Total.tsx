type NumberOfExercises = {numberOfExercises: number[]}

function Total({numberOfExercises}: NumberOfExercises) {
  const sumOfexercises = numberOfExercises.reduce((prev, curr)=> prev+curr, 0)
  return (
    <div>
        <p>Number of exercises {sumOfexercises}</p>
    </div>
  )
}

export default Total