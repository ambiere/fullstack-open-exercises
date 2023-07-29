type NewAnecdote = {nextAnecdote: string}

function NewAnecdote({nextAnecdote}: NewAnecdote) {
  return (
    <div className="new-anecdote">
        <h2>Anecdotes of the day</h2>
        <p>{nextAnecdote}</p>
    </div>
  )
}

export default NewAnecdote