function NewAnecdote({ nextAnecdote }) {
  return (
    <div className="new-anecdote">
      <h2>Anecdotes of the day</h2>
      <p>{nextAnecdote}</p>
    </div>
  )
}

export default NewAnecdote
