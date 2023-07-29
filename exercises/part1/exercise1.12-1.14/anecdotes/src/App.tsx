import { useState } from "react"
import anecdotes from "./store/anecdotes"
import getRandomInt from "./utils/generateRandomInt"
import AnecdotesInput from "./components/AnecdotesInput"
import MostVoted from "./components/MostVoted"
import NewAnecdote from "./components/NewAnecdote"

function App() {
  const [nextAnecdote, setNextAnecdote] = useState<string>(anecdotes[0])
  const [index, setIndex] = useState<number>(0)
  const [anecdoteVotes, setAnecdoteVote] = useState<{[index: number] : number}>({0: 0})
  
  function newAnecdote() {
    //There a chance that the random number generated is equal to previous one
    //Copy the anecodes and delete the current anecdote to avoid being selected 
    //as the next anecdote upon request for new anecdote
    const anecdoteCopy = structuredClone(anecdotes) 
    const index = anecdoteCopy.indexOf(nextAnecdote) //Index Current selected anecode
    const deleted = anecdoteCopy.splice(index, 1) 
    console.log("Removed from the array: ",deleted)
    const next = getRandomInt(0, anecdoteCopy.length)
    const indexNext = anecdotes.indexOf(anecdoteCopy[next]) //Index Next anecode to select

    setIndex(indexNext) //Record index of selected anecode
    setAnecdoteVote(prev => {
      console.log("index of next anecdote: ", indexNext)
      //Load immutably votes of the next anecode into votes state, 
      //if undefined initialize to 0 
      return {...prev, [indexNext]: prev[indexNext] ? prev[indexNext] :  0} 
    })
    return setNextAnecdote(anecdoteCopy[next])
  }

  function voteAnecdote() {
    console.log("voted for: ", `"${nextAnecdote}"`)
    return setAnecdoteVote(prev=> {
      const index = anecdotes.indexOf(nextAnecdote)
      return {...prev, [index]: prev[index] + 1}
    })
  }

  return (
    <div className="main">
      <NewAnecdote nextAnecdote={nextAnecdote}/>
      <div className="main-input">
          <AnecdotesInput textNode={"Vote"} callback={voteAnecdote} votes={anecdoteVotes[index]}/>
          <AnecdotesInput textNode={"New anecdote"} callback={newAnecdote}/>
      </div>
      <MostVoted anecdoteVotes={anecdoteVotes}/>
    </div>
  )
}

export default App
