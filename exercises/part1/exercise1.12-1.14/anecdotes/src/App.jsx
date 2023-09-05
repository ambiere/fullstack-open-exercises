import { useState } from 'react'
import anecdotes from './store/anecdotes'
import getRandomInt from './utils/generateRandomInt'
import AnecdotesInput from './components/AnecdotesInput'
import MostVoted from './components/MostVoted'
import NewAnecdote from './components/NewAnecdote'

function App() {
  const [nextAnecdote, setNextAnecdote] = useState(anecdotes[0])
  const [index, setIndex] = useState(0)
  const [anecdoteVotes, setAnecdoteVote] = useState({ 0: 0 })

  function newAnecdote() {
    const anecdoteCopy = structuredClone(anecdotes)
    const index = anecdoteCopy.indexOf(nextAnecdote)
    const deleted = anecdoteCopy.splice(index, 1)
    console.log('Removed from the array: ', deleted)
    const next = getRandomInt(0, anecdoteCopy.length)
    const indexNext = anecdotes.indexOf(anecdoteCopy[next])

    setIndex(indexNext)
    setAnecdoteVote((prev) => {
      console.log('index of next anecdote: ', indexNext)
      return {
        ...prev,
        [indexNext]: prev[indexNext] ? prev[indexNext] : 0,
      }
    })
    return setNextAnecdote(anecdoteCopy[next])
  }

  function voteAnecdote() {
    console.log('voted for: ', `"${nextAnecdote}"`)
    return setAnecdoteVote((prev) => {
      const index = anecdotes.indexOf(nextAnecdote)
      return { ...prev, [index]: prev[index] + 1 }
    })
  }

  return (
    <div className="main">
      <NewAnecdote nextAnecdote={nextAnecdote} />
      <div className="main-input">
        <AnecdotesInput
          textNode={'Vote'}
          callback={voteAnecdote}
          votes={anecdoteVotes[index]}
        />
        <AnecdotesInput textNode={'New anecdote'} callback={newAnecdote} />
      </div>
      <MostVoted anecdoteVotes={anecdoteVotes} />
    </div>
  )
}

export default App
