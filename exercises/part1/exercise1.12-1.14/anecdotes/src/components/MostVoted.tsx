import anecdotes from '../store/anecdotes'

type MostVoted = {anecdoteVotes: {[index: number] : number}}

function MostVoted({anecdoteVotes}:MostVoted) {
  const [key, vote] = Object.entries(anecdoteVotes).sort((a, b) => b[1] - a[1])[0]
  return (
    <div className='most-voted'>
        <h2>Anecdote with most votes</h2>
        {
          vote !== 0 ? 
          <>
            <p>{anecdotes[Number(key)]}</p>
            <span>{vote} vote(s)</span>
          </>      
          : <p>No anecdote has been voted</p>
        }
   </div>
  )
}

export default MostVoted