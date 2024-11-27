import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5273/api/tarefas/listar')
      .then(response => setTarefas(response.data))
      .catch(error => console.error('Erro ao listar tarefas:', error));
  }, []);

  return (
    <div>
      <h2>Todas as Tarefas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa: any) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarTarefas;
