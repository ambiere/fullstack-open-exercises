import { ContentType } from './Content'

function Part(content: ContentType) {
  return (
    <div>
        <p>{content.part} {content.exercise}</p>
    </div>
  )
}

export default Part