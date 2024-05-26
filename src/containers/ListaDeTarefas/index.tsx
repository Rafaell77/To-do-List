import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver aula 3 EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar TS',
    descricao: 'Ver aula 3 EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar TS',
    descricao: 'Ver aula 3 EBAC',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
