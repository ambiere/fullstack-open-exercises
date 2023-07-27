import { ContentType } from './Content'

type Part = {part: ContentType}

function Part({part: {name, exercises}}:Part) {
  return (
    <div>
        <p>{name} {exercises}</p>
    </div>
  )
}

export default Part