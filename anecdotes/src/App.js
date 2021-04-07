import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  //above Array for useState solution found at: https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781

  const randomClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const voteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  //console.log(Math.max(...votes), votes.indexOf(Math.max(...votes)))

  //as noted in exercise, Array.indexOf will return the index of the first result with the max value. Other considerations would need to be taken to show that any potential ties in votes
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={voteClick} text='vote' />
      <Button handleClick={randomClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[votes.indexOf(Math.max(...votes))]}</div>
    </div>
  );
};

const Button = ({handleClick, text}) => {

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default App