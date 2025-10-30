import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value} {props.suffix}
      </td>
    </tr>
  )
}

const Statistics = props => {
  if (!props.good && !props.neutral && !props.bad) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
        <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <StatisticLine text="positive" value={((props.good / (props.good + props.neutral + props.bad)) * 100) || 0} suffix=" %" />
      </tbody>
    </table>
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
      <Button handleClick={goodClicks} text="good" />
      <Button handleClick={neutralClicks} text="neutral" />
      <Button handleClick={badClicks} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App