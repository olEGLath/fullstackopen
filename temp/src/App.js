import { useState } from 'react'

const Exibir = props => <div>{props.valor}</div>

const Botao = (props) => (
  <button onClick={props.handleClique}>
    {props.texto}
  </button>
)

const App = () => {
  const [valor, setValor] = useState(10)


  const setNoValor = (novoValor) => {
    console.log('setValor atual', novoValor)
    setValor(novoValor)
  }
  

  return (
    <div>
      <Exibir valor={valor} />
      <Botao handleClique={() => setNoValor(1000)} texto="Mil" />
      <Botao handleClique={() => setNoValor(0)} texto="Zerar" />
      <Botao handleClique={() => setNoValor(valor + 1)} texto="Incrementar" />
    </div>
  )
}

export default App