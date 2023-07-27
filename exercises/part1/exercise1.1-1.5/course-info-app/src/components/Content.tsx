import { useId } from "react"
import Part from "./Part"

export type ContentType = {name:string, exercises:number}
type Contents = {parts: ContentType[]}

function Content({parts}: Contents) {
  const key = useId()
  const content = parts.map((part, index) => <Part key={key+index} part={part} />)
  return (
    <div>
        {content}
    </div>
  )
}

export default Content