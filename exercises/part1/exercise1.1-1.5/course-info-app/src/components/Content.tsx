import { useId } from "react"
import Part from "./Part"

export type ContentType = {part:string, exercise:number}
type Contents = {contents: ContentType[]}

function Content({contents}: Contents) {
  const id = useId()
  const content = contents.map(({part, exercise}, index) => <Part key={id+index} part={part} exercise={exercise} />)
  return (
    <div>
        {content}
    </div>
  )
}

export default Content