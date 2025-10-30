import { useState } from 'react'

const Statistics = props => {
  if (!props.good && !props.neutral && !props.bad) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
      <p>positive {((props.good / (props.good + props.neutral + props.bad)) * 100) || 0} %</p>
    </div>
  )
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const goodClicks = () => setGood(good + 1)
const neutralClicks = () => setNeutral(neutral + 1)
const badClicks = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={goodClicks}>good</button>
      <button onClick={neutralClicks}>neutral</button>
      <button onClick={badClicks}>bad</button>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App