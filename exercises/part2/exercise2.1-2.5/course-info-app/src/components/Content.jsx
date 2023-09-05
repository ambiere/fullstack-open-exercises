import Part from './Part'

function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => (
        <Part key={crypto.randomUUID()} part={part} />
      ))}
    </div>
  )
}

export default Content
