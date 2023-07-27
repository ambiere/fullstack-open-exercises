import { ContentType } from "./Content"
type Parts = {parts: ContentType[]}

function Total({parts}: Parts) {
  const sumOfexercises = parts.reduce((prev, {exercises})=> prev + exercises, 0)
  return (
    <div>
        <p>Number of exercises {sumOfexercises}</p>
    </div>
  )
}

export default Total