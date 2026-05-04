import { useState } from 'react'
import './App.css'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa() {
    if (texto.trim() === '') {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      nome: texto,
      concluida: false
    }

    setTarefas([...tarefas, novaTarefa])
    setTexto('')
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id)

    setTarefas(novaLista)
  }

  function concluirTarefa(id) {
    const novaLista = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        }
      }

      return tarefa
    })

    setTarefas(novaLista)
  }

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span className={tarefa.concluida ? 'concluida' : ''}>
              {tarefa.nome}
            </span>

            <div className="botoes">
              <button onClick={() => concluirTarefa(tarefa.id)}>
                {tarefa.concluida ? 'Desfazer' : 'Concluir'}
              </button>

              <button onClick={() => removerTarefa(tarefa.id)}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App