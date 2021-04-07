import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const title = 'give feedback';
  //const history = {good, neutral, bad}
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: (good-bad)/all,
    positive: 100*good/all + ' %'
  }

  const handleClickGood = () => {
    setGood(good+1)
    setAll(all+1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const handleClickBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  return (
    <div>
      <Header title={title} />
      <Button handleClick={handleClickGood} text='good'/>
      <Button handleClick={handleClickNeutral} text='neutral'/>
      <Button handleClick={handleClickBad} text='bad'/>
      <h2>statistics</h2>
      <Statistics stats={stats} />
    </div>
  )
}

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

/*const History = (props) => {
  const {good, neutral, bad} = props.hist

  return (
    <>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  )
}*/

const Statistics = (props) => {
  const {good, neutral, bad, all, average, positive} = props.stats
  if (all===0) {
    return <div>No feedback given</div>;
  }
  return (
    <table>
      <tbody>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={all} />
      <Statistic text='average' value={average} />
      <Statistic text='positive' value={positive} />
      </tbody>
    </table>
  );
};

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App