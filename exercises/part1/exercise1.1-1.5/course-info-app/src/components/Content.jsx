import { useId } from 'react'
import Part from './Part'

function Content({ parts }) {
  const key = useId()
  const content = parts.map((part, index) => (
    <Part key={key + index} part={part} />
  ))
  return <div>{content}</div>
}

export default Content
