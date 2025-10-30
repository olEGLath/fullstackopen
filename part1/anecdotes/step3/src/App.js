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
    return
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
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const goodClicks = () => setGood(good + 1)
  const neutralClicks = () => setNeutral(neutral + 1)
  const badClicks = () => setBad(bad + 1)

  const randomString = () => {
    const randomIndex = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomIndex)
  }

  const initialVotes = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(initialVotes)

  const voteAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const maxVoteIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodClicks} text="good" />
      <Button handleClick={neutralClicks} text="neutral" />
      <Button handleClick={badClicks} text="bad" />
      <h2>Anecdote of the day</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={randomString}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[maxVoteIndex]}
      </p>
      <p>has {votes[maxVoteIndex]} votes</p>
    </div>
  )
}

export default App