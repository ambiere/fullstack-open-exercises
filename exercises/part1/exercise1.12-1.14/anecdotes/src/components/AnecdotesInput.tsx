type AnecdotesInput = {textNode: string, votes?: number, callback: () => void}

function AnecdotesInput({textNode, votes, callback}: AnecdotesInput) {
  const vote = votes || votes === 0 ? votes : ""
  // const _textNode = textNode === "Vote"? votes! > 1 ? textNode + "s" : textNode : textNode
  return (
    <div className="anecdotes-input">
      {(vote === 0 || Number(vote) > 0) && <p className="vote">{vote}</p>}
     <button type="button" onClick={callback}>{textNode}</button>
    </div>
  )
}

export default AnecdotesInput