import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastrarTarefa from './components/tarefa/CadastrarTarefa';
import ListarTarefas from './components/tarefa/ListarTarefas';
import AlterarTarefa from './components/tarefa/AlterarTarefa';
import ConcluidasTarefas from './components/tarefa/ConcluidasTarefas';
import NaoconcluidasTarefas from './components/tarefa/NaoconcluidasTarefas';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tarefa/cadastrar">Cadastrar Tarefa</Link>
            </li>
            <li>
              <Link to="/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefa/alterar">Alterar Status</Link>
            </li>
            <li>
              <Link to="/tarefa/concluidas">Tarefas Concluídas</Link>
            </li>
            <li>
              <Link to="/tarefa/naoconcluidas">Tarefas Não Concluídas</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tarefa/cadastrar" element={<CadastrarTarefa />} />
          <Route path="/tarefa/listar" element={<ListarTarefas />} />
          <Route path="/tarefa/alterar" element={<AlterarTarefa />} />
          <Route path="/tarefa/concluidas" element={<ConcluidasTarefas />} />
          <Route path="/tarefa/naoconcluidas" element={<NaoconcluidasTarefas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
