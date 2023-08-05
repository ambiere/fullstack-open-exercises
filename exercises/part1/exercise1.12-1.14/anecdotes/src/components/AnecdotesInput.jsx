function AnecdotesInput({textNode, votes, callback}) {
  const vote = votes || votes === 0 ? votes : ""
  return (
    <div className="anecdotes-input">
      {(vote === 0 || Number(vote) > 0) && <p className="vote">{vote}</p>}
     <button type="button" onClick={callback}>{textNode}</button>
    </div>
  )
}

export default AnecdotesInput