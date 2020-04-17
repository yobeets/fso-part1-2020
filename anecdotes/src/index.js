import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))

  const handlePick = () => setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))

  const handleVote = () => {
    const newScore = [
      ...score
    ]
    newScore[selected] += 1
    setScore(newScore)
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <button onClick={handleVote}>
          vote
        </button>
        <button onClick={handlePick}>
          next anecdote
        </button>
      <h1>most votes</h1>
      <p>{props.anecdotes[score.indexOf(Math.max(...score))]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

